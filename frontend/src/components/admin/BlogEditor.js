import React, { useState } from 'react';
import axios from 'axios';

const BlogEditor = ({ post, onClose, onSave, backendURL }) => {
  const isEditing = !!post;
  const [form, setForm] = useState({
    title: post?.title || '',
    slug: post?.slug || '',
    author: post?.author || 'FixitBay LLC Team',
    excerpt: post?.excerpt || '',
    content: post?.content || '',
    categories: (post?.categories || []).join(', '),
    tags: (post?.tags || []).join(', '),
    meta_title: post?.meta_title || '',
    meta_description: post?.meta_description || '',
    is_published: post?.is_published || false,
    publish_date: post?.publish_date || new Date().toISOString().split('T')[0],
  });
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [aiTopic, setAiTopic] = useState('');
  const [aiKeywords, setAiKeywords] = useState('');

  const autoSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const handleTitleChange = (val) => {
    setForm(f => ({
      ...f,
      title: val,
      slug: isEditing ? f.slug : autoSlug(val)
    }));
  };

  const handleGenerate = async () => {
    if (!aiTopic.trim()) { alert('Введите тему статьи'); return; }
    setGenerating(true);
    try {
      const token = localStorage.getItem('adminToken');
      const res = await axios.post(`${backendURL}/api/cms/blog-posts/generate`, {
        topic: aiTopic,
        keywords: aiKeywords ? aiKeywords.split(',').map(k => k.trim()) : [],
        tone: 'professional'
      }, { headers: { Authorization: `Bearer ${token}` } });

      if (res.data.success) {
        const d = res.data.data;
        setForm(f => ({
          ...f,
          title: d.title || f.title,
          slug: d.slug || autoSlug(d.title || f.title),
          excerpt: d.excerpt || f.excerpt,
          content: d.content || f.content,
          meta_title: d.meta_title || f.meta_title,
          meta_description: d.meta_description || f.meta_description,
          categories: (d.categories || []).join(', '),
          tags: (d.tags || []).join(', '),
        }));
      }
    } catch (err) {
      alert('Ошибка AI: ' + (err.response?.data?.detail || err.message));
    } finally {
      setGenerating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.slug.trim()) { alert('Заполните заголовок'); return; }
    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const payload = {
        ...form,
        categories: form.categories.split(',').map(c => c.trim()).filter(Boolean),
        tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      };
      if (isEditing) {
        await axios.put(`${backendURL}/api/cms/blog-posts/${post.slug}`, payload, config);
      } else {
        await axios.post(`${backendURL}/api/cms/blog-posts`, payload, config);
      }
      onSave();
    } catch (err) {
      alert('Ошибка: ' + (err.response?.data?.detail || err.message));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {isEditing ? 'Редактировать статью' : 'Новая статья'}
        </h2>

        {/* AI Generator */}
        {!isEditing && (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-4 mb-6 border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-3">AI-генерация статьи</h3>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <input
                type="text"
                value={aiTopic}
                onChange={e => setAiTopic(e.target.value)}
                placeholder="Тема: How much does dryer repair cost..."
                className="px-3 py-2 border rounded-lg text-sm"
                data-testid="ai-topic-input"
              />
              <input
                type="text"
                value={aiKeywords}
                onChange={e => setAiKeywords(e.target.value)}
                placeholder="Ключевые слова: dryer repair, cost, Bay Area"
                className="px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="px-5 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 text-sm font-medium"
              data-testid="ai-generate-btn"
            >
              {generating ? 'Генерация...' : 'Сгенерировать статью'}
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Заголовок</label>
              <input type="text" value={form.title} onChange={e => handleTitleChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm" data-testid="blog-title-input" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Slug (URL)</label>
              <input type="text" value={form.slug} onChange={e => setForm({...form, slug: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Краткое описание (excerpt)</label>
            <textarea value={form.excerpt} onChange={e => setForm({...form, excerpt: e.target.value})}
              rows={2} className="w-full px-3 py-2 border rounded-lg text-sm resize-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Контент (HTML)</label>
            <textarea value={form.content} onChange={e => setForm({...form, content: e.target.value})}
              rows={12} className="w-full px-3 py-2 border rounded-lg text-sm font-mono resize-vertical"
              data-testid="blog-content-input" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
              <input type="text" value={form.meta_title} onChange={e => setForm({...form, meta_title: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
              <input type="text" value={form.meta_description} onChange={e => setForm({...form, meta_description: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Категории (через запятую)</label>
              <input type="text" value={form.categories} onChange={e => setForm({...form, categories: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="Repair Costs, Refrigerator" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Теги (через запятую)</label>
              <input type="text" value={form.tags} onChange={e => setForm({...form, tags: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg text-sm" placeholder="repair, cost, 2026" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Дата публикации</label>
              <input type="date" value={form.publish_date} onChange={e => setForm({...form, publish_date: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg text-sm" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="is_published" checked={form.is_published}
              onChange={e => setForm({...form, is_published: e.target.checked})}
              className="w-4 h-4 text-blue-600 rounded" data-testid="blog-published-checkbox" />
            <label htmlFor="is_published" className="text-sm text-gray-700">Опубликовать</label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">Отмена</button>
            <button type="submit" disabled={saving}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              data-testid="blog-save-btn">
              {saving ? 'Сохранение...' : (isEditing ? 'Сохранить' : 'Создать')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
