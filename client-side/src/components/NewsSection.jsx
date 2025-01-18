const newsData = [
  {
    title: "10 Steps: How to Create a Successful Business From Your Art",
    date: "December 07, 2018",
    comments: 2,
    imageUrl: "https://i.ibb.co.com/BjftyCv/cuadro-vertical-1.jpg", // Replace with actual image URL
  },
  {
    title: "Google Launched Virtual Tours of 50 Museums",
    date: "December 07, 2018",
    comments: 2,
    imageUrl: "https://i.ibb.co.com/0txz7pT/cuadro-vertical-2.jpg", // Replace with actual image URL
  },
  {
    title: "10 Facts From the Life of the Most Expensive Artist of Our Time",
    date: "December 07, 2018",
    comments: 2,
    imageUrl: "https://i.ibb.co.com/MgxsNn5/cuadro-vertical-3.jpg", // Replace with actual image URL
  },
];

const NewsCard = ({ title, date, comments, imageUrl }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden bg-white">
      <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{date}</span>
          <span>{comments} comments</span>
        </div>
      </div>
    </div>
  );
};

const NewsSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Our News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            date={news.date}
            comments={news.comments}
            imageUrl={news.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
