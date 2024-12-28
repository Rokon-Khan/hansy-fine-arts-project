import hansAbout from "../assets/hans-about.jpg";

const Bio = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-16 lg:px-32 lg:my-20 my-10">
      <div className="max-w-7xl flex flex-col  md:flex-row justify-between items-center md:items-start mx-auto">
        {/* Left content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="lg:text-5xl text-3xl font-semibold font-yesterYear text-blue-500 mb-2">
            Captain Hans Yaeggy
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Watercolor Artist & Airline Captain
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Originally from Guatemala, Captain Hans Yaeggy found in watercolor a
            way to capture more than just landscapes: he captures moments and
            emotions. Since the age of 16, he discovered the power of colors to
            freeze time and convey feelings that go beyond words. Throughout his
            career, he has refined this approach at institutions like the
            Universidad Popular de Guatemala, where he took drawing and art
            classes. With additional training in marketing and advertising at
            the Marketing and Advertising Center of Guatemala, he has been able
            to merge his artistic technique with a deep understanding of how to
            emotionally connect with viewers.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Over his aviation career—with a degree in Business from St. Mary's
            University and a master's in Aviation Safety from Everglades
            University—Hans Yaeggy has traveled the world, soaring over
            landscapes that few have the privilege to see so clearly. These
            experiences have allowed him to capture not only the geography of
            these places but also the emotional atmosphere they evoke, inviting
            viewers to experience serenity and awe from a privileged
            perspective.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            One of the most unique aspects of his work is his project capturing
            photographs of the skies he flies over, transforming those images
            into watercolor paintings. This process allows the fleeting magic of
            landscapes viewed from the cockpit to be immortalized through a
            visual collage that combines his mastery in photography with his
            watercolor techniques. These skies, seen only by those at the front
            of an aircraft, are transformed into works that reflect the
            transition between photography and painting, merging perspectives
            that are rarely accessible to most.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            His participation in the “SubastArte” event at the Maracaibo Yacht
            Club in 2006-2007, where he won second place, was a highlight in his
            artistic career. This silent auction, featuring renowned
            international artists, raised funds for the Pediatric Foundation of
            Maracaibo Hospital for children with cancer—an achievement that Hans
            Yaeggy remains deeply proud of.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Today, art collectors in galleries in Minnesota and other countries
            have acquired his unique pieces, drawn to his ability to transport
            viewers to a specific place and moment. Those seeking not just art
            but a profound emotional connection find in the works of Captain
            Hans Yaeggy a reflection of nature's ephemeral beauty—a window into
            a world suspended in time.
          </p>
          <p className="text-gray-700 leading-relaxed">
            As a representative of the Houston Chapter of the Latino Pilots
            Association, Hans Yaeggy not only contributes to the art world but
            also supports the Latino pilot community, mentoring new generations
            while continuing to capture the soul of every landscape he flies
            over.
          </p>
        </div>
        {/* Right image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <div className="relative">
            <img
              src={hansAbout}
              alt="Captain Hans Yaeggy"
              className="rounded-lg shadow-lg"
            />
            {/* <div
              className="absolute inset-0 w-full h-full -z-10"
              style={{
                backgroundImage: "url('../assets/hans-about.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 0.3,
              }}
            ></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
