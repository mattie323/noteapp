const AddNotesPage = () => {
  return (
    <div className="bg-red-50 min-h-screen">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-xl border m-4 md:m-0">
          <form onSubmit="">
            <h2 className="text-3xl text-start font-semibold mb-6">
              New Note:
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Title:
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Beautiful Apartment In Miami"
                required
                value="title"
                // onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value="description"
                // onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Category:
              </label>
              <div className="flex flex-row gap-5">
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    id="personal"
                    name="category"
                    required
                    value="personal"
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                  Personal
                </label>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    id="home"
                    name="category"
                    required
                    value="home"
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                  Home
                </label>
                <label>
                  <input
                    className="mr-2"
                    type="radio"
                    id="business"
                    name="category"
                    required
                    value="business"
                    // onChange={(e) => setTitle(e.target.value)}
                  />
                  Business
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-full  focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Save Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNotesPage;
