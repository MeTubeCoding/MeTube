/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import { BsPatchCheck } from 'react-icons/bs';
import { FaThumbsUp, FaThumbsDown, FaShareAlt, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

import profile from '../components/user.jpg';

const WindowVideo = () => {

  return (
    <body className="bg-me-darkpurple min-h-screen">
      <div className="max-w-screen-lg mx-auto mt-0" style={{ marginLeft: "10%" }}>
        <div className="flex flex-col items-start">
          <div className="flex flex-row justify-between w-full">
            <video
              className="w-full flex-grow-1 transform -translate-x-1/2 translate-x-5"
              controls
              width="560"
              height="315"
            >
              <source src="https://www.youtube.com/watch?v=UbFOU_XR85E" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="mt-4 text-xl font-bold pl-4 text-me-yellow">CODING FACTORY CERGY : THE CALIFORNIA !</h2>
          <div className="flex items-center justify-between mt-4 pl-4 w-full">
            <div className="flex items-center">
              <div className="flex items-center">
                <div
                  className="w-14 h-14 bg-me-yellow rounded-full"
                  style={{ 
                    backgroundImage: `url(${profile})`, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover' 
                  }}
                ></div>
                <div className="ml-2">
                  <div className="flex items-center">
                    <h4 className="text-me-orange font-bold mb-1 mr-2">André From The Valley</h4>
                    <BsPatchCheck className="text-me-yellow w-5 h-5" />
                  </div>
                  <p className="text-sm text-me-yellow">100 000 subscribers</p>
                </div>
              </div>
              <button className="ml-4 px-4 py-2 text-me-yellow bg-me-lightpurple rounded-full shadow-md hover:shadow-lg h-10">
                Subscribe
              </button>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex flex-row items-center mt-3">
                <div className="mr-2 flex items-center">
                  <button className="p-2 rounded-full bg-me-lightpurple shadow-md hover:shadow-lg">
                    <FaThumbsUp className="text-me-yellow w-4 h-4" />
                  </button>
                  <span className="text-me-yellow font-medium ml-2">500 k</span>
                </div>
                <span className="text-me-yellow mx-2">|</span>
                  <button className="p-2 rounded-full bg-me-lightpurple shadow-md hover:shadow-lg">
                    <FaThumbsDown className="text-me-yellow w-4 h-4" />
                  </button>
                <span className="text-me-yellow mx-2">|</span>
                  <button className="p-2 rounded-full bg-me-lightpurple shadow-md hover:shadow-lg">
                    <FaShareAlt className="text-me-yellow w-4 h-4" />
                  </button>
                <span className="text-me-yellow ml-2">Share</span>
                <span className="text-me-yellow mx-2">|</span>
                  <button className="p-2 rounded-full bg-me-lightpurple shadow-md hover:shadow-lg">
                    <FaExclamationTriangle className="text-me-yellow w-4 h-4" />
                  </button>
                <span className="text-me-yellow ml-2">Report</span>
              </div>
            </div>
          </div>
          <div className="bg-me-lightpurple rounded-lg mt-6 px-3 py-2">
              <p className="text-me-orange text-sm font-bold">500 000 views • 19 april 2023</p>
              <div className="mt-2">
                <p className="text-me-yellow text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eaque quibusdam rerum ratione nesciunt id excepturi. Libero assumenda asperiores sit deleniti, quam sunt temporibus sint accusantium et, id non voluptates explicabo adipisci. Quos aliquam delectus laborum tenetur est mollitia voluptate velit! Tempora numquam modi quisquam dolorem, debitis necessitatibus! Unde officiis facere repellendus minima nam suscipit blanditiis repellat iure recusandae sapiente vitae voluptatem, assumenda ad illo maxime ipsum similique voluptas? Dicta harum soluta voluptas iure rerum accusamus, earum perferendis quisquam sed provident placeat nostrum nobis, eveniet ratione quae amet! Minima nam esse repudiandae rem nisi. Molestias accusantium est ullam, qui impedit dolorem, nesciunt culpa expedita exercitationem adipisci sit amet mollitia natus? Quisquam magni consectetur officiis quasi amet deleniti quibusdam! Magnam, beatae autem. Quaerat nulla error perferendis quis dolores dicta ipsa exercitationem provident vel, maxime sapiente vitae esse assumenda tempore suscipit minima rerum est praesentium. Distinctio aliquid amet nihil accusantium tempora, commodi doloribus excepturi repudiandae, deserunt et soluta saepe reprehenderit officia pariatur perspiciatis quia at magnam facere earum, dicta natus repellat! Adipisci modi architecto voluptas expedita culpa eius saepe, praesentium ea dolore dolores quaerat eligendi. Sed minima error labore itaque esse tenetur ex eligendi, voluptatem autem. Vel cupiditate voluptas laudantium, quo molestias nesciunt perferendis quam? Minima voluptas mollitia sint placeat officiis quasi veniam delectus cumque temporibus aliquid animi dolorem, nostrum ullam optio aspernatur minus porro, ducimus voluptatem? Quae animi doloribus reprehenderit sequi molestiae, quod quisquam. Iusto laborum ratione provident aperiam dolorum, nam ea adipisci temporibus labore molestiae, vero unde quaerat ex sint!
                </p>
              </div>
            </div>
            <div className="mt-6 w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold text-me-yellow pl-4">Comments (3)</h3>
                <div>
                  <label htmlFor="sort-select" className="mr-2 text-me-yellow font-bold">Sort By :</label>
                  <select id="sort-select" className="bg-me-orange text-me-yellow px-2 py-1 rounded">
                    <option value="top">Top Comments</option>
                    <option value="recent">Most recent first</option>
                  </select>
                </div>
              </div>
              <div className="bg-me-lightpurple rounded-lg px-3 py-2 mt-4">
                <div className="flex items-start mt-4">
                  <div className="w-">
                    <div className="flex mb-4">
                      <div className="flex-shrink-0 mr-2">
                        <img src="https://via.placeholder.com/40" alt="Logo de chaîne" className="rounded-full w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <form className="flex">
                          <input type="text" placeholder="add a comment..." className="text-me-yellow bg-me-darkpurple p-2 rounded-full w-full mx-2" />
                          <button type="submit" className="p-2 rounded-full bg-me-orange shadow-md hover:shadow-lg mx-2">
                            <span className="text-me-yellow">Cancel</span>
                          </button>
                          <button type="submit" className="p-2 rounded-full bg-me-orange shadow-md hover:shadow-lg ml-2">
                            <span className="text-me-yellow">Add</span>
                          </button>
                        </form>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-shrink-0 mr-2">
                        <img src={require('../components/valerie.jpg')} alt="Logo de chaîne" className="rounded-full w-8 h-8 object-center" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="text-me-orange font-bold mb-1">Valérie ECALLE</h4>
                        </div>
                        <p className="text-me-yellow">Wow, cette vidéo m&apos;a fait voyager en Californie et découvrir la Silicon Valley d&apos;une manière incroyable ! Les images de la région sont absolument magnifiques et j&apos;ai adoré en apprendre davantage sur les entreprises et les technologies qui font de cette région un endroit si spécial. J&apos;espère avoir la chance de visiter la Silicon Valley un jour et de vivre cette expérience en personne. Merci pour cette vidéo inspirante !</p>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <FaThumbsUp className="text-me-yellow w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <FaThumbsDown className="text-me-yellow w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <span className="text-me-yellow">Respond</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-shrink-0 mr-2">
                        <img src={require('../components/colombe.jpg')} alt="Logo de chaîne" className="rounded-full w-8 h-8 object-center" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="text-me-orange font-bold mb-1">Colombe VAN-MASTRIGT</h4>
                        </div>
                        <p className="text-me-yellow">Wow, cette vidéo m&apos;a transporté directement en Californie ! J&apos;ai adoré découvrir la Silicon Valley, voir les célèbres campus de Google et Apple et plonger dans l&apos;ambiance dynamique et innovante de cette région. Les images de la côte Pacifique et des collines verdoyantes ont également été un véritable enchantement pour les yeux. Je ne peux pas attendre pour retourner en Californie et explorer encore plus de cette région captivante. Merci pour cette belle vidéo !</p>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <FaThumbsUp className="text-me-yellow w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <FaThumbsDown className="text-me-yellow w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <span className="text-me-yellow">Respond</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      <div className="flex-shrink-0 mr-2">
                        <img src={require('../components/musk.jpg')} alt="Logo de chaîne" className="rounded-full w-8 h-8 object-center" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <h4 className="text-me-orange font-bold mb-1 mr-2">Elon MUSK</h4>
                          <FaCheckCircle className="text-me-yellow" />
                        </div>
                        <p className="text-me-yellow">Great video! As a Californian native and tech enthusiast, seeing the sights and sounds of the Silicon Valley never gets old. I&apos;m glad you captured the entrepreneurial spirit and technological innovation that has defined this region for decades. It&apos;s no surprise that this area continues to attract some of the best and brightest minds in the world. Keep up the great work!</p>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <FaThumbsUp className="text-me-yellow w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <FaThumbsDown className="text-me-yellow w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-full bg-me-darkpurple shadow-md hover:shadow-lg">
                            <span className="text-me-yellow">Respond</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br /><br />
        </div>
      </div>
    </body>
  );
};

export default WindowVideo;