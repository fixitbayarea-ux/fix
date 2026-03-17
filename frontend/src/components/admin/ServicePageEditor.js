import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const ServicePageEditor = ({ page, onClose, onSave, backendURL }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: 'San Francisco & Bay Area',
    meta_title: '',
    meta_description: '',
    h1: '',
    hero_image: '',
    intro_paragraphs: ['', '', ''],
    common_problems: [{ title: '', description: '' }],
    brands: ['Whirlpool', 'GE', 'Samsung', 'LG', 'Frigidaire', 'Maytag'],
    faqs: [{ question: '', answer: '' }],
    internal_links: ['/', '/service-areas', '/contact'],
    is_published: true
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (page) {
      setFormData(page);
    }
  }, [page]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    try {
      const token = localStorage.getItem('adminToken');
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      if (page) {
        // Update existing page
        await axios.put(`${backendURL}/api/cms/service-pages/${page.id}`, formData, config);
      } else {
        // Create new page
        await axios.post(`${backendURL}/api/cms/service-pages`, formData, config);
      }

      onSave();
      onClose();
    } catch (err) {
      setError(err.response?.data?.detail || 'Error saving page');
    } finally {
      setSaving(false);
    }
  };

  const addProblem = () => {
    setFormData({
      ...formData,
      common_problems: [...formData.common_problems, { title: '', description: '' }]
    });
  };

  const addFAQ = () => {
    setFormData({
      ...formData,
      faqs: [...formData.faqs, { question: '', answer: '' }]
    });
  };

  const removeProblem = (index) => {
    setFormData({
      ...formData,
      common_problems: formData.common_problems.filter((_, i) => i !== index)
    });
  };

  const removeFAQ = (index) => {
    setFormData({
      ...formData,
      faqs: formData.faqs.filter((_, i) => i !== index)
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-xl">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {page ? 'Edit Service Page' : 'Create New Service Page'}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
              </div>
            )}

            {/* Basic Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Basic Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">H1 Heading</label>
                <input
                  type="text"
                  value={formData.h1}
                  onChange={(e) => setFormData({ ...formData, h1: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                <input
                  type="text"
                  value={formData.meta_title}
                  onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  value={formData.meta_description}
                  onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="2"
                  required
                />
              </div>
            </div>

            {/* Intro Paragraphs */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Introduction Paragraphs</h3>
              {formData.intro_paragraphs.map((para, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Paragraph {index + 1}
                  </label>
                  <textarea
                    value={para}
                    onChange={(e) => {
                      const newParas = [...formData.intro_paragraphs];
                      newParas[index] = e.target.value;
                      setFormData({ ...formData, intro_paragraphs: newParas });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
              ))}
            </div>

            {/* Common Problems */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">Common Problems</h3>
                <button
                  type="button"
                  onClick={addProblem}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  + Add Problem
                </button>
              </div>
              {formData.common_problems.map((problem, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-gray-600">Problem {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeProblem(index)}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Problem Title"
                    value={problem.title}
                    onChange={(e) => {
                      const newProblems = [...formData.common_problems];
                      newProblems[index].title = e.target.value;
                      setFormData({ ...formData, common_problems: newProblems });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Description"
                    value={problem.description}
                    onChange={(e) => {
                      const newProblems = [...formData.common_problems];
                      newProblems[index].description = e.target.value;
                      setFormData({ ...formData, common_problems: newProblems });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="2"
                  />
                </div>
              ))}
            </div>

            {/* Brands */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brands (comma-separated)</label>
              <input
                type="text"
                value={formData.brands.join(', ')}
                onChange={(e) => setFormData({ ...formData, brands: e.target.value.split(',').map(b => b.trim()) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* FAQs */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">FAQs</h3>
                <button
                  type="button"
                  onClick={addFAQ}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  + Add FAQ
                </button>
              </div>
              {formData.faqs.map((faq, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-2">
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-medium text-gray-600">FAQ {index + 1}</span>
                    <button
                      type="button"
                      onClick={() => removeFAQ(index)}
                      className="text-red-600 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder="Question"
                    value={faq.question}
                    onChange={(e) => {
                      const newFaqs = [...formData.faqs];
                      newFaqs[index].question = e.target.value;
                      setFormData({ ...formData, faqs: newFaqs });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    placeholder="Answer"
                    value={faq.answer}
                    onChange={(e) => {
                      const newFaqs = [...formData.faqs];
                      newFaqs[index].answer = e.target.value;
                      setFormData({ ...formData, faqs: newFaqs });
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows="3"
                  />
                </div>
              ))}
            </div>

            {/* Publish Status */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_published"
                checked={formData.is_published}
                onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <label htmlFor="is_published" className="text-sm font-medium text-gray-700">
                Published
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-3 justify-end pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400"
              >
                {saving ? 'Saving...' : 'Save Page'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicePageEditor;