import React, { useState } from 'react';
import axios from 'axios';

const ReviewEditor = ({ review, onClose, onSave, backendURL }) => {
  const isEditing = !!review;
  const [form, setForm] = useState({
    source: review?.source || 'Google',
    author: review?.author || '',
    rating: review?.rating || 5,
    text: review?.text || '',
    is_featured: review?.is_featured !== false,
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.author.trim() || !form.text.trim()) {
      alert('Заполните имя автора и текст отзыва');
      return;
    }
    setSaving(true);
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      if (isEditing) {
        await axios.put(`${backendURL}/api/cms/reviews/${review.id}`, form, config);
      } else {
        await axios.post(`${backendURL}/api/cms/reviews`, form, config);
      }
      onSave();
    } catch (error) {
      alert('Ошибка: ' + (error.response?.data?.detail || error.message));
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6" onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold text-gray-800 mb-6">
          {isEditing ? 'Редактировать отзыв' : 'Добавить отзыв'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Источник</label>
              <select
                value={form.source}
                onChange={e => setForm({...form, source: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                data-testid="review-source-select"
              >
                <option value="Google">Google</option>
                <option value="Thumbtack">Thumbtack</option>
                <option value="Yelp">Yelp</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Рейтинг</label>
              <select
                value={form.rating}
                onChange={e => setForm({...form, rating: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                data-testid="review-rating-select"
              >
                {[5,4,3,2,1].map(n => (
                  <option key={n} value={n}>{'★'.repeat(n)}{'☆'.repeat(5-n)} ({n})</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Имя автора</label>
            <input
              type="text"
              value={form.author}
              onChange={e => setForm({...form, author: e.target.value})}
              placeholder="John D."
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              data-testid="review-author-input"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Текст отзыва</label>
            <textarea
              value={form.text}
              onChange={e => setForm({...form, text: e.target.value})}
              rows={5}
              placeholder="Отзыв клиента..."
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              data-testid="review-text-input"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="is_featured"
              checked={form.is_featured}
              onChange={e => setForm({...form, is_featured: e.target.checked})}
              className="w-4 h-4 text-blue-600 rounded"
              data-testid="review-featured-checkbox"
            />
            <label htmlFor="is_featured" className="text-sm text-gray-700">
              Показывать на главной (карусель отзывов)
            </label>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              Отмена
            </button>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
              data-testid="review-save-btn"
            >
              {saving ? 'Сохранение...' : (isEditing ? 'Сохранить' : 'Добавить')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewEditor;
