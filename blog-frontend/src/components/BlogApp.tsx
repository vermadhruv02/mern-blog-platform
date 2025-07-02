// import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function BlogApp() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (title.trim() && content.trim()) {
      const newPost: Post = {
        id: Date.now(),
        title,
        content,
      };
      setPosts([newPost, ...posts]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <main className="max-w-3xl mx-auto p-4 space-y-6">
      <section className="bg-white rounded-2xl shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">Create a Post</h1>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mb-4"
        />
        <Textarea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mb-4"
        />
        <Button onClick={addPost}>Post</Button>
      </section>

      <section className="space-y-4">
        {posts.map((post) => (
          <Card key={post.id} className="rounded-2xl shadow-md">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
