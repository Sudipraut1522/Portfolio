import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full p-4 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-purple-600 py-4 text-lg">about</p>
          <h2 className="text-4xl py-4">Who I am</h2>
          <p className="py-4"> //I an not your Normal Develpoer</p>
          <p className=" py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            laudantium velit similique vel repudiandae molestias a veritatis,
            laborum repellat ipsa assumenda sunt aut, dicta animi eum quas iste.
            Magnam, accusamus?Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ratione, veritatis quibusdam. Vitae ducimus est
            explicabo libero! Nostrum vitae alias iusto libero tempore
            distinctio, aperiam culpa. Dolorum mollitia blanditiis laborum ipsa.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quod
            voluptatem ex nemo eum ducimus omnis modi obcaecati aliquam atque
            velit molestias molestiae praesentium facilis quos hic, suscipit vel
            corporis!
          </p>
        </div>
        <div className="p-2 max-w-full h-auto flex justify-center items-center rounded-xl shadow-xl shadow-gray-600">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUame9vB-NP02ToSoouI-i_7tX2_ebNDkcg&s"
            alt="Example Image"
            className="rounded-lg hover:scale-105 ease-in duration-300 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
