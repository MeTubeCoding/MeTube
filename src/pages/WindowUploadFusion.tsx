/* eslint-disable eol-last */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const WindowUploadFusion = () => {
  const [file, setFile] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const [selectedGame, setSelectedGame] = useState('');

  const [showComments, setShowComments] = useState(true);
  const [checkComments, setCheckComments] = useState(true);
  const [severeComments, setSevereComments] = useState(false);
  const [sortComments, setSortComments] = useState("mieux-notes");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("File uploaded: ", file);
    // Ajouter le code pour envoyer le fichier
  };

  const categories = [
    { value: 'jeu-video', label: 'Video game' },
    { value: 'musique', label: 'Music' },
    { value: 'divertissement', label: 'Entertainment' },
    { value: 'éducation', label: 'Education' },
  ];

  const games = [
    { value: 'fortnite', label: 'Fortnite' },
    { value: 'minecraft', label: 'Minecraft' },
    { value: 'call-of-duty', label: 'Call of Duty' },
    { value: 'overwatch', label: 'Overwatch' },
    { value: 'league-of-legends', label: 'League of Legends' },
    { value: 'valorant', label: 'Valorant' },
  ];

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleGameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedGame(event.target.value);
  };

  const handleShowCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowComments(event.target.checked);
  };

  const handleCheckCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckComments(event.target.checked);
  };

  const handleSevereCommentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSevereComments(event.target.checked);
  };

  const handleSortCommentsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortComments(event.target.value);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-yt-bg-primary bg-red-600 flex justify-between items-center p-2 md:p-3">
        <h2 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
            Upload and Publish Video
        </h2>
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-sm md:text-base font-medium">
          <li>
              <a href="#" className="text-white hover:text-gray-300">
              Home
              </a>
          </li>
          <li>
              <a href="#" className="text-white hover:text-gray-300">
              About
              </a>
          </li>
          <li>
              <a href="#" className="text-white hover:text-gray-300">
              Contact
              </a>
          </li>
          </ul>
        </nav>
        <button
            className="block md:hidden focus:outline-none"
            aria-label="Menu"
        >
          <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </header>
      <div className="flex justify-center items-center">
        <div className="w-full md:w-1/2 pl-24 max-w-xl mx-auto px-2 py-8">
          <form onSubmit={handleSubmit} className="max-w-md w-full px-6">
            <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-10">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-gray-100 rounded-lg font-medium text-red-600 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-red-500">
                <span className="text-2xl font-bold mb-2">Drop a file here</span>
                <br />
                <span className="text-gray-400">Maximum file size: 50 MB </span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
              </label>
              <p className="pl-1 mt-5">{file ? file.name : "No file uploaded"}</p>
              <div className="mt-8 flex justify-center">
                <button type="submit" disabled={!file} className="px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-700">
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full md:w-2/3 max-w-4xl mx-auto py-8">
          <div className="bg-white rounded-md shadow-lg">
            <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
              <img src="https://via.placeholder.com/640x360.png?text=Preview+Image" alt="Video Preview" className="absolute inset-0 w-full h-full object-cover rounded-t-md" />
            </div>
            <form className="px-6 py-8">
              <div className="mb-6">
                <label htmlFor="video-title" className="block font-medium text-gray-800 mb-2" aria-label="Video title" aria-required="true">
                  Title
                </label>
                <input type="text" id="video-title" name="video-title" className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600" />
              </div>
              <div className="mb-6">
                <label htmlFor="video-description" className="block font-medium text-gray-800 mb-2" aria-label="Video description" aria-required="true">
                  Description
                </label>
                <textarea id="video-description" name="video-description" rows={4} className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600"></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="video-playlist" className="block font-medium text-gray-800 mb-2">Add to Playlist</label>
                <select id="video-playlist" name="video-playlist" className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600">
                  <option value="">Select a playlist</option>
                  <option value="create-playlist">Create new playlist</option>
                  <option value="playlist-1">Playlist 1</option>
                  <option value="playlist-2">Playlist 2</option>
                  <option value="playlist-3">Playlist 3</option>
                </select>
              </div>
              <div className="flex mb-6">
                <div className="w-1/2 pr-2 flex items-center font-medium text-gray-800 mb-2">
                  <input type="checkbox" id="video-children" name="video-children" className="form-checkbox"/>
                  <label htmlFor="video-children" className="ml-2">This video is appropriate for children</label>
                </div>
                <div className="w-1/2 pl-2 flex items-center font-medium text-gray-800 mb-2">
                  <input type="checkbox" id="video-commercial" name="video-commercial" className="form-checkbox"/>
                  <label htmlFor="video-commercial" className="ml-2">This video contains commercial content</label>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex">
                  <div className="w-1/3 mr-2">
                    <img src="https://via.placeholder.com/640x360.png?text=Preview+Image+1" alt="Video Preview 1" className="w-full h-full object-cover rounded-md cursor-pointer" />
                  </div>
                  <div className="w-1/3 mr-2">
                    <img src="https://via.placeholder.com/640x360.png?text=Preview+Image+2" alt="Video Preview 2" className="w-full h-full object-cover rounded-md cursor-pointer" />
                  </div>
                  <div className="w-1/3">
                    <img src="https://via.placeholder.com/640x360.png?text=Preview+Image+3" alt="Video Preview 3" className="w-full h-full object-cover rounded-md cursor-pointer" />
                  </div>
                </div>
                <br />
                <details>
                  <summary className="font-medium text-gray-800 cursor-pointer">Click to see video details</summary>
                  <div className="mt-4">
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="flex mb-6">
                        <div className="w-1/2 pr-2">
                          <label htmlFor="video-language" className="block font-medium text-gray-800 mb-2">Language</label>
                          <select id="video-language" name="video-language" className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600">
                            <option value="">Select a language</option>
                            <option value="other">Other</option>
                            <option value="english">English</option>
                            <option value="french">French</option>
                            <option value="spanish">Spanish</option>
                            <option value="german">German</option>
                          </select>
                        </div>
                        <div className="w-1/2 pr-2">
                          <label htmlFor="video-language" className="block font-medium text-gray-800 mb-2">Subtitling certificate</label>
                          <select id="video-language" name="video-language" className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600">
                            <option value="">None</option>
                            <option value="">This content has never been shown on television in the United States</option>
                            <option value="">This content was only shown on television in the United States without subtitles</option>
                            <option value="">This content has not aired on television in the United States with closed captions since September 30, 2012</option>
                            <option value="">This content does not fall into the category of online programming that requires closed captioning pursuant to FCC Rules (Section 47, Subpart 79)</option>
                            <option value="">The FCC and/or the US Congress have granted a waiver for this content to meet captioning requirements</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex mb-6">
                        <div className="w-1/2 pl-2">
                            <label htmlFor="video-date" className="block font-medium text-gray-800 mb-2">Date of recording</label>
                            <input type="date" id="video-date" defaultValue={"test"} name="video-date" className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600" value="" placeholder="None" />
                          </div>
                        <div className="w-1/3 pl-2">
                          <label htmlFor="video-location" className="block font-medium text-gray-800 mb-2">Location</label>
                          <input type="text" id="video-location" name="video-location" className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600" />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="mb-6">
                      <label htmlFor="video-tags" className="block font-medium text-gray-800 mb-2" aria-label="Video tags">
                        Tags
                      </label>
                      <input type="text" id="video-tags" name="video-tags" className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600" />
                    </div>
                    <div className="w-1/2 pr-2">
                      <label htmlFor="video-license" className="block font-medium text-gray-800 mb-2">License</label>
                      <select id="video-license" name="video-license" className="w-full px-4 py-2 rounded-md border border-gray-400 focus:outline-none focus:border-red-600">
                        <option value="">Youtube License - Standard</option>
                        <option value="">Creative Commons - Attribution</option>
                      </select>
                    </div>
                    <br />
                    <div className="flex mb-6">
                      <div className="w-1/2 pr-2 flex items-center font-medium text-gray-800 mb-2">
                        <input type="checkbox" id="video-children" name="video-children" className="form-checkbox"/>
                        <label htmlFor="video-children" className="ml-2">Allow integration</label>
                      </div>
                      <div className="w-1/2 pl-2 flex items-center font-medium text-gray-800 mb-2">
                        <input type="checkbox" id="video-commercial" name="video-commercial" className="form-checkbox"/>
                        <label htmlFor="video-commercial" className="ml-2">Post to the "Subscriptions" feed and notify subscribers</label>
                      </div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <h2 className="text-xl font-semibold mb-2">Category</h2>
                      <p className="text-gray-600 mb-4">
                        Add your video to a category to make it easier for viewers to find it.
                      </p>
                      <div>
                        <label htmlFor="category" className="block font-medium mb-2">
                        Category
                        </label>
                        <select
                          name="category"
                          id="category"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          value={selectedCategory}
                          onChange={handleCategoryChange}
                        >
                          <option value="">Select a category</option>
                          {categories.map((category) => (
                            <option key={category.value} value={category.value}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      {selectedCategory === 'jeu-video' && (
                        <div className="mt-4">
                          <label className="block font-medium mb-2">Video game</label>
                          {games.map((game) => (
                            <div key={game.value} className="flex items-center mb-2">
                              <input
                                type="radio"
                                id={game.value}
                                name="game"
                                value={game.value}
                                className="mr-2"
                                checked={selectedGame === game.value}
                                onChange={handleGameChange}
                              />
                              <label htmlFor={game.value}>{game.label}</label>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="border-t border-gray-200 mt-8 pt-4 bg-gray-100 p-4 rounded-lg">
                      <h2 className="text-xl font-semibold mb-2">Comments and reviews</h2>
                      <div>
                        <label htmlFor="show-comments" className="flex items-center cursor-pointer mb-2">
                          <input
                            type="checkbox"
                            id="show-comments"
                            className="form-checkbox mr-2"
                            checked={showComments}
                            onChange={handleShowCommentsChange}
                          />
                          <span>Allow all comments</span>
                        </label>
                      </div>
                      <div>
                        <label htmlFor="check-comments" className="flex items-center cursor-pointer mb-2">
                          <input
                            type="checkbox"
                            id="check-comments"
                            className="form-checkbox mr-2"
                            checked={checkComments}
                            onChange={handleCheckCommentsChange}
                          />
                          <span>Review potentially inappropriate comments before posting</span>
                        </label>
                        <div>
                          <label htmlFor="severe-comments" className="ml-5 flex items-center cursor-pointer mb-2">
                            <input
                              type="checkbox"
                              id="severe-comments"
                              className={`form-checkbox mr-2 ${checkComments ? '' : 'opacity-50'}`}
                              checked={severeComments}
                              onChange={handleSevereCommentsChange}
                              disabled={!checkComments}
                            />
                            <span className={`${checkComments ? '' : 'opacity-50'}`}>Increase severity <span className="text-red-600 bg-red-100 px-1 rounded-md">Test</span></span>
                          </label>
                        </div>
                      </div>
                      <label htmlFor="verify-all-comments" className="flex items-center cursor-pointer mb-2">
                        <input
                          type="checkbox"
                          id="verify-all-comments"
                          className="form-checkbox mr-2"
                        />
                        <span>Check all comments before posting</span>
                      </label>
                      <label htmlFor="disable-comments" className="flex items-center cursor-pointer mb-2">
                        <input
                          type="checkbox"
                          id="disable-comments"
                          className="form-checkbox mr-2"
                        />
                        <span>Disable comments</span>
                      </label>
                      <div>
                        <label htmlFor="sort-comments" className="block font-medium mb-2">
                          Sort by
                        </label>
                        <select
                          name="sort-comments"
                          id="sort-comments"
                          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                          value={sortComments}
                          onChange={handleSortCommentsChange}
                        >
                          <option value="mieux-notes">Top Rated</option>
                          <option value="plus-récents">The most recent</option>
                        </select>
                      </div>
                      <div className="mt-4">
                        <label htmlFor="show-likes" className="flex items-center cursor-pointer mb-2">
                          <input
                            type="checkbox"
                            id="show-likes"
                            className="form-checkbox mr-2"
                          />
                          <span>Display the number of "likes" for this video</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <br />
                </details>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700"
                  >
                    Publish
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowUploadFusion;