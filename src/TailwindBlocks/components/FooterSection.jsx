import React from 'react';

// Example data for categories and links
const categoriesData = [
  {
    title: 'Category 1',
    links: [
      { text: 'Google', url: 'https://www.google.com/' },
      { text: 'Facebook', url: 'https://www.facebook.com/' },
      { text: 'Twitter', url: 'https://twitter.com/' },
      { text: 'GitHub', url: 'https://github.com/' }
    ]
  },
  {
    title: 'Category 2',
    links: [
      { text: 'Amazon', url: 'https://www.amazon.com/' },
      { text: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { text: 'Reddit', url: 'https://www.reddit.com/' },
      { text: 'YouTube', url: 'https://www.youtube.com/' }
    ]
  },
  {
    title: 'Category 3',
    links: [
      { text: 'Instagram', url: 'https://www.instagram.com/' },
      { text: 'Pinterest', url: 'https://www.pinterest.com/' },
      { text: 'Stack Overflow', url: 'https://stackoverflow.com/' },
      { text: 'Medium', url: 'https://medium.com/' }
    ]
  },
  {
    title: 'Category 4',
    links: [
      { text: 'Netflix', url: 'https://www.netflix.com/' },
      { text: 'Spotify', url: 'https://www.spotify.com/' },
      { text: 'Wikipedia', url: 'https://www.wikipedia.org/' },
      { text: 'Adobe', url: 'https://www.adobe.com/' }
    ]
  }
];

const FooterSection = () => {
  return (
    <section>
      <footer className="text-gray-600 body-font bg-BgColor text-TextColor">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            {categoriesData.map((category, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-TextColor tracking-widest text-sm mb-3">{category.title}</h2>
                <nav className="list-none mb-10">
                  {category.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} className="text-gray-600 hover:text-gray-800" target="_blank" rel="noopener noreferrer">{link.text}</a>
                    </li>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600">Placeholder</label>
              <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            <p className="text-gray-500 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
              <br className="lg:block hidden" />waistcoat green juice
            </p>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">Enamel pin tousled raclette tacos irony</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default FooterSection;
