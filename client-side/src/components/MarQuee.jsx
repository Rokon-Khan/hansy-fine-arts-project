import Marquee from "react-fast-marquee";

const MarQuee = () => {
  return (
    <div className="my-6">
      <Marquee>
        <div className="divider">
          <h3 className="text-4xl font-bold ">| *Home decor collection* |</h3>
        </div>

        <div className="divider">
          <h3 className="text-4xl font-bold">| *Give us your best shot!* |</h3>
        </div>
        <div className="divider">
          <h3 className="text-4xl font-bold">| *Frame and art* |</h3>
        </div>
        <div className="divider">
          <h3 className="text-4xl font-bold">| *We love art* |</h3>
        </div>
      </Marquee>
    </div>
  );
};

export default MarQuee;
