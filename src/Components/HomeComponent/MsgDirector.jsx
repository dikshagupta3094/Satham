import React, { useEffect } from "react";
import DirectorImg from "../../assets/Home/DirectorImg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
function MsgDirector() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      easing: "ease-in-sine",
      duration: 500,
    });
  }, []);
  return (
    <div className="bg-white border-4 border-blue-950 mx-2 rounded-md">
      <h1 className="text-white text-center text-3xl p-4  font-bold bg-blue-900 text-shadow ">
        MEESAGE FROM DIRECTOR
      </h1>
      <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center gap-10  mx-2 rounded-lg">
        <div className="lg:w-[30%] flex justify-center">
          <img
            src={DirectorImg}
            alt="Director Image"
            className="box-shadow ml-3 mt-3 rounded-md h-auto w-full "
          />
        </div>
        <div className="lg:w-3/4 w-full">
          <p className="text-justify ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            adipisci eius perspiciatis tenetur quam saepe iusto aliquid magni
            rerum, exercitationem maxime harum totam autem cum corporis
            similique illum aspernatur, repellat ex dolore unde. Veniam
            perferendis modi amet voluptas eligendi distinctio ratione
            similique, alias doloremque, explicabo dolor asperiores iure, sed
            doloribus corrupti vitae. Illum eveniet laboriosam voluptatem,
            aspernatur tempore a, natus omnis consequuntur maiores
            exercitationem fugiat consectetur unde, explicabo possimus odit
            eaque aliquam suscipit adipisci ab quae temporibus minus amet
            deserunt? Magnam eos itaque unde excepturi necessitatibus molestiae
            ab repellendus, eveniet quasi soluta ea architecto id, quam eum
            corrupti quos impedit! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Dolor est explicabo eius repellendus et, enim a
            praesentium nisi sit repudiandae suscipit assumenda? Error, eveniet?
            Nemo, autem distinctio laboriosam sequi quam voluptates magnam quae
            dignissimos omnis facilis pariatur hic temporibus asperiores qui!
            Totam delectus blanditiis quas, ab, similique esse illum commodi
            eaque quis libero velit molestias, ad magni provident a quaerat
            animi. Officia, commodi placeat maiores repellat vero non culpa.
            Modi sunt animi quae, delectus libero nemo, ullam aliquid fuga nisi
            non laborum exercitationem porro saepe esse consequuntur nihil,
            voluptatibus unde minima voluptatem! Ab non eligendi id officiis
            natus dolorum distinctio nemo? Obcaecati error recusandae voluptas,
            quidem dolorum quia maxime dignissimos necessitatibus, mollitia
            quaerat maiores. Adipisci necessitatibus tempore recusandae! Ipsa,
            inventore, totam repudiandae quisquam voluptates voluptate corporis
            ducimus hic amet officia saepe sunt rem iste ea maiores eveniet?
            Asperiores eaque ex nobis nulla voluptas architecto laboriosam
            tempore, distinctio quae. Sed, illo! Quos ab ea odio quas atque
            iste, nihil placeat reprehenderit sunt! Autem aliquam fuga
            perferendis harum eius assumenda expedita, aperiam corporis,
            possimus voluptas molestias eos culpa quidem aliquid id consectetur,
            atque vitae a neque aut officiis in illo? Architecto error non quas
            eum accusantium nemo laborum corrupti officia mollitia beatae Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quae, libero
            commodi illum saepe, autem atque numquam, quaerat dolores animi odio
            rerum fuga. Ipsam, tenetur! Itaque perspiciatis veniam deserunt sint
            quae. <NavLink to='/directormsg'><button className=" text-blue-950 font-extrabold">Read more...</button></NavLink>
          </p>  
          <p className="font-semibold text-xl">Dr. Preeti Singh</p>
          <p className="font-semibold text-xl">
            Director <span>SATHM</span>,DAVV
          </p>
        </div>
      </div>
    </div>
  );
}

export default MsgDirector;

{
  /* Director Image Section */
}
{
  /* <div className="flex flex-col items-center">
          <img
            src={DirectorImg}
            alt="Director Dr. Preeti Singh"
            className="w-full max-w-xs sm:max-w-sm md:max-w-[500px] h-auto border-2 border-blue-900  shadow rounded-md"
          />
          <p className="text-center p-2 text-gray-800 font-bold text-xl hover:text-gray-600 mt-2">
            Dr. Preeti Singh
          </p>
        </div> */
}

{
  /* Director Description Section */
}
{
  /* <div
          className="w-full md:max-w-[700px] text-justify border shadow p-5 rounded-md bg-white leading-8 m-2 text-sm md:text-base box-shadow"
          
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Praesentium, dicta? Ea quae eligendi impedit deleniti
          praesentium maxime reiciendis autem dolorem doloremque ex
          molestiae quidem mollitia alias adipisci non nemo, eum commodi
          iste molestias! Consequuntur repellendus sed tempora aperiam,
          est pariatur quasi aut totam, rem temporibus asperiores
          ducimus nesciunt veniam expedita! Ipsum dolores quaerat, enim
          nobis ipsam cupiditate illo voluptatibus quia modi, qui magni
          officiis facilis doloribus nemo beatae quam obcaecati quod
          saepe dolore culpa provident deleniti deserunt laudantium.
          Accusamus voluptatibus obcaecati expedita exercitationem
          adipisci dicta sit deleniti eaque quis, officia eveniet ex id
          cum facere, mollitia tenetur. Expedita pariatur numquam
          repudiandae exercitationem voluptas dignissimos aut,
          voluptatum veniam sunt! Possimus deleniti tenetur aperiam quo.
          Ut ducimus cumque aspernatur totam officia quo omnis
          necessitatibus maiores blanditiis dolor deleniti rem harum,
          quis qui et exercitationem pariatur cum? Ad et, deleniti enim
          voluptates, itaque quidem aspernatur eos, minima repellat
          veniam eius cupiditate!
        </div> */
}
