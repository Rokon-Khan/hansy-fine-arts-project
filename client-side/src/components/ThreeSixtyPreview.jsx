// import ThreeSixty from "react-360-view";

// const ThreeSixtyPreview = ({ image }) => {
//   return (
//     <div className="w-[500px] h-[400px]">
//       <ThreeSixty
//         amount={36}
//         imagePath=`${image}/360-view`
//         fileName="image_{index}.jpg?v1"
//       />
//     </div>
//   );
// };

// export default ThreeSixtyPreview;

// import ThreeSixty from "react-360-view";

// const ThreeSixtyPreview = () => {
//   return (
//     <div className="w-[500px] h-[400px]">
//       <ThreeSixty
//         amount={36}
//         imagePath="./cuadro-vertical-1.jpg"
//         fileName="cuadro-vertical-1_{index}.jpg?v1"
//       />
//     </div>
//   );
// };
// export default ThreeSixtyPreview;
import ThreeSixty from "react-360-view";

const ThreeSixtyPreview = () => {
  return (
    <div className="w-1/2">
      <ThreeSixty
        amount={36}
        imagePath="/cuadro-vertical-1/"
        fileName="cuadro-vertical-1_{index}.jpg?v1"
        autoplay
      />
    </div>
  );
};

export default ThreeSixtyPreview;
