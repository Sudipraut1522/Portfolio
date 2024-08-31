
import React from "react";
import Projectitems from "./Projectitems"

const Project = () => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16  ">
        <p className="text-purple-600 uppercase py-4 tracking-widest text-lg">Project</p>
        <h2 className="placeholder-sky-400">What i have Built</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
        <Projectitems title="property Finder" background='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNh63-UrLEEqKU8NSp_nEkOSB7Gxzbwbq2Hw&s' projectUrl="/property"/>
        <Projectitems title="property Finder" background='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNh63-UrLEEqKU8NSp_nEkOSB7Gxzbwbq2Hw&s' projectUrl="/property"/>

        <Projectitems title="property Finder" background='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNh63-UrLEEqKU8NSp_nEkOSB7Gxzbwbq2Hw&s' projectUrl="/property"/>
        <Projectitems title="property Finder" background='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNh63-UrLEEqKU8NSp_nEkOSB7Gxzbwbq2Hw&s' projectUrl="/property"/>

        </div>
      </div>
    </div>
  );
};

export default Project;
