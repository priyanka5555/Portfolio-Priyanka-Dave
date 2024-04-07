import React from 'react';


const Experience = () => {
    const work = [
        {
          id: 1,
          jobTitle: "Data Centre Specialist",
          duration: "Dec 2022 - Present",
          employer: "Ontario Lottery and Gaming Corporation (OLG)",  //· Dec 2022 - Present",
          location: "North York, Ontario, Canada",
          desc: (<>
          <ul>
            <li className='py-1'>• Executing the day-to-day operational delivery of the NOC activities with respect to system run books, data backup, SAN support and maintenance, file server configuration support and maintenance, database administration & support, management and maintenance of the data centre security infrastructure to ensure business continuity</li>
            <li className='py-1'> • Delivering activities pertaining to the full data centre operations lifecycle including overall planning, monitoring, evaluation, deployment, and operations within the data centre to ensure consistent practices are being executed</li>
            <li className='py-1'>• Supporting system workflow interactions and communication interfaces along with ensuring process documentation and process adherence for the data centre, including meeting or exceeding measurable objectives based on the pre-defined service level agreements (SLAs)</li>
            <li className='py-1'>• Supporting the development of a formalized business continuity and disaster recovery strategy/planning including defining the mitigation process, technology and people design</li>
            <li className='py-1'>• Supporting the ongoing testing of disaster recovery plans to ensure adequate recovery time as per the pre-defined SLAs to ensure timely resolution</li>
            <li className='py-1'>• Identifying possible improvement opportunities for Data Centre services in order to improve efficiency metrics</li>
            <li className='py-1'>• Assisting in root cause analysis, solution research and development for new and unknown issues in order to resolve issues in order to continue to protect against data loss</li>
            <li className='py-1'>• Assisting in ongoing review of NOC monitoring tools and activities to ensure the changing priorities of the business are actively monitored and issues actioned quickly.</li>
            <li className='py-1'>• Classifying and elevating incidents as per OLG Service Classification requirements, including escalating incidents to the appropriate groups (as required) in a timely manner to improve time to resolution</li>
            <li className='py-1'>• Assisting in the resolution of major incidents to ensure timely turnaround and resolution</li>
          </ul>
          </>),
        },
        {
          id: 2,
          jobTitle: "Customer Service Representative",
          duration: "Aug 2021 - Dec 2022",
          employer: "Paymentus", // · Aug 2021 - Dec 2022",
          location: "Richmond Hill, Ontario, Canada",
          desc:(<>
          <ul>
          <li className='py-1'>• Processed payments for the client's mutual customers (Inbound and Outbound).</li>
          <li className='py-1'>• Assisted customers by explaining procedures, answering questions, and providing relative information in a professional business manner.</li>
          <li className='py-1'>• Followed call center scripts and processes when handling different topics.</li>
          <li className='py-1'>• Worked collaboratively with Customer Service, Operations, Marketing, and Sales to improve client satisfaction.</li>
          </ul>
          </>),
        },
        {
          id: 3,
          jobTitle: "Software Specialist",
          duration: "Nov 2019 - Jul 2020",
          employer: "eClinicalWorks", // · Nov 2019 - Jul 2020",
          location: "Ahmedabad Area, India",
          desc:(<>
            <ul>
            <li className='py-1'>• Provided daily support to users of the system including answering questions, analyzing problems, and quickly forming solutions to return systems to proper operation</li>
            <li className='py-1'>• Communicated clearly and effectively with end users, colleagues, and management to quickly resolve issues and ensure customer satisfaction</li>
            <li className='py-1'>• Installed and maintained hardware, software, and other equipment to meet client requirements, routinely observed operational performance, and installed security patches and updates when necessary</li>
            <li className='py-1'>• Maintained detailed records of daily interactions with customers, installation activities, reported issues, and completed solutions along with any further actions required of management or repair personnel.</li>
            <li className='py-1'>• Collaborated with technical staff and clients to establish goals and objectives for system improvements and upgrades.</li>
            <li className='py-1'>•Created and implemented new processes to improve efficiency and customer satisfaction while reducing costs.</li>
            </ul>
            </>),
        },
        {
          id: 4,
          jobTitle: "IT Support Technician",
          duration: "Jan 2019 - Nov 2019",
          employer: "Radixweb", // · Jan 2019 - Nov 2019",
          location: "Ahmedabad Area, India",
          desc:(<>
            <ul>
           
            <li className='py-1'>• Installing, configuring, upgrading and maintaining computer systems and network infrastructure</li>
            <li className='py-1'>• Monitoring and maintaining overall health of the system</li>
            <li className='py-1'>• Maintaining the inventory and documenting troubleshooting procedures</li>
            {/* <li className='py-1'>•</li> */}
            </ul>
            </>),
        },
    
      ]

  return (
   
    <div name="experience"
       className=' grid bg-gradient-to-b from-gray-800 to-black  text-white py-24 sm:py-32 md:h-screen'>  
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 
          border-gray-200'>
            Work Experience
          </p>
          <p className='py-6'>Check out some of my work here</p>
        </div>

        <div className='overflow-hidden grid sm:grid-cols-1 md:grid-cols-2 gap-20 px-12 sm:px-0 '>
        {work.map(({ id, jobTitle, duration, employer, location,desc }) => (
           
              <div key={id} className='px-2 py-2 cursor-pointer capitalize font-medium
         text-gray-500 hover:scale-105 duration-200 h-60 overflow-y-scroll no-scrollbar'>  

                <div className="flex items-center gap-x-4 text-xs ">
                  <time className="text-gray-400 hover:text-gray-600">{duration}</time>
                  <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-700 hover:bg-gray-100">{jobTitle}</a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-400 group-hover:text-gray-600">
                    <p>
                      <span className="absolute inset-0"></span>
                      {employer}
                    </p>
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400 group-hover:text-gray-600">{location}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">

                  <div className="text-sm leading-6">
                    <p className="font-semibold white-700 group-hover:text-gray-600">
                      <p>
                        <span className="absolute inset-0  "></span>
                       {desc}
                      </p>
                    </p>

                  </div>
                </div>
              </div>
    
          ))}


        
          
        </div>

      </div>
    </div>
  );
};

export default Experience