const QuoteContent = ({ data }) => {
  return (
    <>
      {data ? (
        <div className="flex flex-col items-center px-10 max-w-screen-lg mx-auto mt-12">
          <p className="italic mb-2 text-lg">{data && data[0].author}</p>
          <h2 className="text-xl">
            <span className="text-2xl">“</span>
            {data && data[0].quote}
            <span className="text-2xl">”</span>
          </h2>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default QuoteContent;
