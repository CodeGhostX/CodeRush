const ProblemDetails = () => {
  return (
    <div className="col-span-4 mb-6">
      <div className="text-3xl font-bold text-center">Sum of Array</div>
      <div className="font-bold text-xl">Description</div>
      <div className="text-lg mt-2">
        Given an array of integers a, return the sum of all the elements aᵢ.
      </div>
      {/* Examples */}
      <div className="mt-4 flex flex-col gap-4 ">
        <div className="text-xl font-bold">Examples</div>
        <div>
          <div className="font-bold text-lg"></div>
          <div>
            <span className="font-semibold text-lg">Input : </span>
            <span className="text-lg">1 2</span>
          </div>
          <div>
            <span className="font-semibold text-lg">Output : </span>
            <span className="text-lg">3</span>
          </div>
        </div>
        <div>
          <div className="font-bold text-lg"></div>
          <div>
            <span className="font-semibold text-lg">Input : </span>
            <span className="text-lg">3 4</span>
          </div>
          <div>
            <span className="font-semibold text-lg">Output : </span>
            <span className="text-lg">7</span>
          </div>
        </div>
      </div>
      {/* Constranits */}
      <div className="flex flex-col mt-4">
        <div className="font-bold text-xl">Constraints</div>
        <ul className="list-disc pl-5 pt-1">
          <li>
            <span>-100 &lt;= a, b &lt;= 100</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProblemDetails;
