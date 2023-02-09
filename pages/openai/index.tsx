import React, { useState } from 'react';

const ImagePage = () => {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);

    const response = await fetch(`https://api.openai.com/v1/images/generations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
      body: JSON.stringify({
        model: 'image-alpha-001',
        prompt: `Generate an image of "${text}"`,
      }),
    });

    const data = await response.json();
    setImageUrl(data.data[0].url);
    setIsLoading(false);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white items-center justify-center">
      <div className="p-10 bg-gray-700 rounded-lg gap-3 flex flex-col items-center justify-center">
        <input
          className="border border-gray-700 p-2 bg-gray-800"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <br />
        <br />
        <button
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Gerar Imagem!
        </button>
        <br />
        <br />
        {isLoading ? (
          <div className="text-white">Loading...</div>
        ) : (
          imageUrl && (
            <img
              className="w-64 h-64 rounded-full bg-gray-600"
              src={imageUrl}
              alt={text}
            />
          )
        )}
      </div>
    </div>
  );
};

export default ImagePage;
