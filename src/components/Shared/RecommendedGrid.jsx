const RecommendedGrid = ({recommendedThemes}) => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md sm:max-w-3xl">
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-900">
              Recommended LEGO Themes
            </h3>
            <ul
              role="list"
              className="mt-4 mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {recommendedThemes.map((themes, themesIdx) => (
                <li key={themesIdx}>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between space-x-3 rounded-lg border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="flex min-w-0 flex-1 items-center space-x-3">
                      <span className="block flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-lg"
                          src={themes.imageUrl}
                          alt=""
                        />
                      </span>
                      <span className="block min-w-0 flex-1">
                        <span className="block text-sm font-medium text-gray-900 text-ellipsis overflow-hidden">
                          {themes.name}
                        </span>
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedGrid;