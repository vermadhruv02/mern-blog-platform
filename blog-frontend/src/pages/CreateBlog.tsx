import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Select from 'react-select';
import dayjs from 'dayjs';

type OptionType = { value: string; label: string };

const categories: OptionType[] = [
  { value: 'tech', label: 'Technology' },
  { value: 'lifestyle', label: 'Lifestyle' },
  { value: 'travel', label: 'Travel' },
];

const tagsOptions: OptionType[] = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'webdev', label: 'Web Development' },
];

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<OptionType | null>(null);
  const [tags, setTags] = useState<OptionType[]>([]);
  const [publishNow, setPublishNow] = useState(true);
  const [scheduledTime, setScheduledTime] = useState(dayjs().format('YYYY-MM-DDTHH:mm'));
  
  const handleTagChange = (selected: readonly OptionType[] | null) => {
  setTags(selected ? [...selected] : []);
};


  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postData = {
      title,
      category: category?.value,
      tags: tags.map((tag) => tag.value),
      content: editor?.getHTML() || '',
      publishTime: publishNow ? new Date().toISOString() : new Date(scheduledTime).toISOString(),
    };
    console.log('Post Submitted:', postData);
    // Send to backend
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Create New Post</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Category</label>
          <Select
            options={categories}
            value={category}
            onChange={setCategory}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>

        {/* Tags */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Tags</label>
          <Select
            isMulti
            options={tagsOptions}
            value={tags}
            onChange={handleTagChange}
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>

        {/* Content */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">Content</label>
          <div className="border rounded p-2 min-h-[200px]">
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* Publish Toggle */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={publishNow}
            onChange={(e) => setPublishNow(e.target.checked)}
            className="form-checkbox h-4 w-4 text-blue-600"
          />
          <label className="text-gray-700">Publish Now</label>
        </div>

        {!publishNow && (
          <div>
            <label className="block font-medium text-gray-700 mb-1">Schedule Date/Time</label>
            <input
              type="datetime-local"
              value={scheduledTime}
              onChange={(e) => setScheduledTime(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        )}

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
