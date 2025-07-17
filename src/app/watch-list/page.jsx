"use client";

import { useEffect, useState } from "react";

export default function WatchListCrud() {
  const [watchList, setWatchList] = useState({});

  const [newAnime, setNewAnime] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingAnime, setEditingAnime] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/watch-list", {
        method: "GET",
      });

      const data = await res.json();
      setWatchList(data);
    };

    fetchData();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/watch-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ anime: newAnime }),
    });

    const data = await res.json();
    setWatchList(data);
    setNewAnime("")
  };

  const handleEdit = (id, anime) => {
    setEditingId(id);
    setEditingAnime(anime);
  };

  const handleSave = async (id) => {
    const res = await fetch("/api/watch-list", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, anime: editingAnime }),
    });

    const data = await res.json();
    setWatchList(data);
    setEditingId("");
  };

  const handleDelete = async (id) => {
    const res = await fetch("/api/watch-list", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    setWatchList(data);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-yellow-400 mb-6">Watch List</h1>

      {/* Form Tambah */}
      <form onSubmit={handleAdd} className="flex gap-3 mb-8">
        <input
          type="text"
          className="px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          placeholder="Masukan Anime"
          value={newAnime}
          onChange={(e) => setNewAnime(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded">
          Tambah
        </button>
      </form>

      {/* Daftar List */}
      <div className="w-full max-w-md space-y-4">
        {watchList.data?.map((watchItem) => (
          <div
            key={watchItem.id}
            className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded shadow">
            {/* Jika sedang diedit */}
            {editingId === watchItem.id ? (
              <input
                type="text"
                className="bg-gray-700 px-2 py-1 rounded text-white w-full mr-2"
                value={editingAnime}
                onChange={(e) => setEditingAnime(e.target.value)}
              />
            ) : (
              <span>{watchItem.anime}</span>
            )}

            <div className="flex gap-2">
              {editingId === watchItem.id ? (
                <button
                  onClick={() => handleSave(watchItem.id)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-3 py-1 rounded">
                  Simpan
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(watchItem.id, watchItem.anime)}
                  className="text-yellow-400 hover:underline">
                  Edit
                </button>
              )}

              <button
                onClick={() => handleDelete(watchItem.id)}
                className="text-red-400 hover:underline">
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
