import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ServicePageEditor from './ServicePageEditor';
import ReviewEditor from './ReviewEditor';
import BlogEditor from './BlogEditor';

const CMSDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('service-pages');
  const [servicePages, setServicePages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPage, setEditingPage] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [showCreateReview, setShowCreateReview] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showCreateBlog, setShowCreateBlog] = useState(false);

  const backendURL = process.env.REACT_APP_BACKEND_URL || '';

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };

      if (activeTab === 'service-pages') {
        const res = await axios.get(`${backendURL}/api/cms/service-pages`, config);
        setServicePages(res.data.data || []);
      } else if (activeTab === 'reviews') {
        const res = await axios.get(`${backendURL}/api/cms/reviews`, config);
        setReviews(res.data.data || []);
      } else if (activeTab === 'blog') {
        const res = await axios.get(`${backendURL}/api/cms/blog-posts`, config);
        setBlogPosts(res.data.data || []);
      }
    } catch (error) {
      console.error('Error loading data:', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePage = async (pageId) => {
    if (!window.confirm('Удалить эту страницу?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`${backendURL}/api/cms/service-pages/${pageId}`, config);
      loadData();
    } catch (error) {
      alert('Ошибка: ' + (error.response?.data?.detail || error.message));
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (!window.confirm('Удалить этот отзыв?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`${backendURL}/api/cms/reviews/${reviewId}`, config);
      loadData();
    } catch (error) {
      alert('Ошибка: ' + (error.response?.data?.detail || error.message));
    }
  };

  const handleDeleteBlog = async (slug) => {
    if (!window.confirm('Удалить эту статью?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`${backendURL}/api/cms/blog-posts/${slug}`, config);
      loadData();
    } catch (error) {
      alert('Ошибка: ' + (error.response?.data?.detail || error.message));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminTokenExpiry');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">FixitBay LLC CMS</h1>
            <p className="text-sm text-gray-600">Управление контентом сайта</p>
          </div>
          <div className="flex gap-4 items-center">
            <a href="/admin" className="text-blue-600 hover:underline">Админ-панель</a>
            <a href="/" className="text-blue-600 hover:underline">Посмотреть сайт</a>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Выйти
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <div className="flex gap-1 bg-gray-200 rounded-lg p-1 w-fit">
          <button
            onClick={() => setActiveTab('service-pages')}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition ${
              activeTab === 'service-pages' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
            data-testid="tab-service-pages"
          >
            Страницы услуг ({servicePages.length || '...'})
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition ${
              activeTab === 'reviews' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
            data-testid="tab-reviews"
          >
            Отзывы ({reviews.length || '...'})
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className={`px-5 py-2.5 rounded-md text-sm font-medium transition ${
              activeTab === 'blog' ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
            }`}
            data-testid="tab-blog"
          >
            Блог ({blogPosts.length || '...'})
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        {activeTab === 'service-pages' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Страницы услуг</h2>
              <button
                onClick={() => setShowCreateForm(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
              >
                + Создать страницу
              </button>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              </div>
            ) : (
              <div className="grid gap-4">
                {servicePages.map((page) => (
                  <div key={page.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
                    <div className="flex justify-between items-start">
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{page.title}</h3>
                        <p className="text-sm text-gray-500 mb-1">ID: {page.id}</p>
                        <p className="text-sm text-gray-500">{page.meta_title}</p>
                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs ${
                          page.is_published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {page.is_published ? 'Опубликовано' : 'Черновик'}
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <button onClick={() => setEditingPage(page)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                          Редактировать
                        </button>
                        <button onClick={() => handleDeletePage(page.id)} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                          Удалить
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {activeTab === 'reviews' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Отзывы клиентов</h2>
              <button
                onClick={() => setShowCreateReview(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                data-testid="add-review-btn"
              >
                + Добавить отзыв
              </button>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              </div>
            ) : (
              <div className="grid gap-4">
                {reviews.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
                    <p className="text-gray-500">Пока нет отзывов. Добавьте первый!</p>
                  </div>
                ) : (
                  reviews.map((review) => (
                    <div key={review.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition" data-testid={`cms-review-${review.id}`}>
                      <div className="flex justify-between items-start">
                        <div className="flex-grow pr-4">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold text-gray-800">{review.author}</span>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                              review.source === 'Google' ? 'bg-blue-100 text-blue-700' :
                              review.source === 'Thumbtack' ? 'bg-green-100 text-green-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {review.source}
                            </span>
                            <span className="text-yellow-500 text-sm">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                            {review.is_featured && (
                              <span className="px-2 py-0.5 rounded text-xs bg-orange-100 text-orange-700">На главной</span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{review.text}</p>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button onClick={() => setEditingReview(review)} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                            Изменить
                          </button>
                          <button onClick={() => handleDeleteReview(review.id)} className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
        {activeTab === 'blog' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Блог-статьи</h2>
              <button
                onClick={() => setShowCreateBlog(true)}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
                data-testid="add-blog-btn"
              >
                + Новая статья (AI)
              </button>
            </div>
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              </div>
            ) : (
              <div className="grid gap-4">
                {blogPosts.length === 0 ? (
                  <div className="text-center py-12 bg-white rounded-lg border-2 border-dashed border-gray-300">
                    <p className="text-gray-500">Нет статей. Создайте первую!</p>
                  </div>
                ) : (
                  blogPosts.map((bp) => (
                    <div key={bp.slug} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition" data-testid={`cms-blog-${bp.slug}`}>
                      <div className="flex justify-between items-start">
                        <div className="flex-grow pr-4">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="font-bold text-gray-800">{bp.title}</h3>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${bp.is_published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                              {bp.is_published ? 'Опубликовано' : 'Черновик'}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mb-1">/blog/{bp.slug}</p>
                          <p className="text-gray-600 text-sm line-clamp-1">{bp.excerpt}</p>
                          <div className="flex gap-2 mt-2">
                            {(bp.categories || []).map(c => (
                              <span key={c} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs">{c}</span>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <a href={`/blog/${bp.slug}`} target="_blank" rel="noopener noreferrer" className="px-3 py-1.5 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm" aria-label="opens in new tab">
                            Просмотр
                          </a>
                          <button onClick={() => setEditingBlog(bp)} className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                            Изменить
                          </button>
                          <button onClick={() => handleDeleteBlog(bp.slug)} className="px-3 py-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                            Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </>
        )}
      </main>

      {/* Modals */}
      {showCreateForm && (
        <ServicePageEditor onClose={() => setShowCreateForm(false)} onSave={() => { setShowCreateForm(false); loadData(); }} backendURL={backendURL} />
      )}
      {editingPage && (
        <ServicePageEditor page={editingPage} onClose={() => setEditingPage(null)} onSave={() => { setEditingPage(null); loadData(); }} backendURL={backendURL} />
      )}
      {showCreateReview && (
        <ReviewEditor onClose={() => setShowCreateReview(false)} onSave={() => { setShowCreateReview(false); loadData(); }} backendURL={backendURL} />
      )}
      {editingReview && (
        <ReviewEditor review={editingReview} onClose={() => setEditingReview(null)} onSave={() => { setEditingReview(null); loadData(); }} backendURL={backendURL} />
      )}
      {showCreateBlog && (
        <BlogEditor onClose={() => setShowCreateBlog(false)} onSave={() => { setShowCreateBlog(false); loadData(); }} backendURL={backendURL} />
      )}
      {editingBlog && (
        <BlogEditor post={editingBlog} onClose={() => setEditingBlog(null)} onSave={() => { setEditingBlog(null); loadData(); }} backendURL={backendURL} />
      )}
    </div>
  );
};

export default CMSDashboard;
