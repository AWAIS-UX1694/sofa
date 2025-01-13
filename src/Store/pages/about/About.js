import post2 from "./../../../images/post-2.jpg"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import person1 from "./../../../images/person_1.jpg"
import person2 from "./../../../images/person_2.jpg"
import person3 from "./../../../images/person_3.jpg"
export default function About(){
    const testimonials = [
        {
          text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
          author: "Maria Jones",
          position: "CEO, Co-Founder, XYZ Inc.",
          image: {person1},
        },
        {
          text: "Aliquam vulputate velit imperdiet dolor tempor tristique.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Pellentesque habitant morbi tristique senectus et netus.",
          author: "John Doe",
          position: "CTO, ABC Ltd.",
          image: {person2},
        },
        {
          text: "Integer convallis volutpat dui quis scelerisque. Nullam ac aliquet velit.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Pellentesque habitant morbi tristique senectus.",
          author: "Emma Brown",
          position: "Manager, DEF Corp.",
          image: {person3}
        },
      ];
    return(
        <>
        
    {/* why chice us */}
    <section className="py-28 lg:px-32 md:px-32 px-0 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
            <h2 className="text-4xl font-semibold mb-6">Why Choose Us</h2>
            <p className="text-gray-600 mb-10">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="feature">
              <div className="icon rounded-full bg-gray-100 w-14 h-14   p-3 mb-5 relative">
              <i
                  width="24"
                  height="24"
                    className="fa fa-ship w-24 pl-1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Fast & Free Shipping
                </h3>
                <p className="text-sm text-gray-600">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature">
              <div className="icon rounded-full bg-gray-100 w-14 h-14   p-3 mb-5 relative">
              <i
                  width="24"
                  height="24"
                    className="fa fa-shop w-24 pl-1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Easy to Shop
                </h3>
                <p className="text-sm text-gray-600">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature">
                <div className="icon rounded-full bg-gray-100 w-14 h-14   p-3 mb-5 relative">
                <i
                  width="24"
                  height="24"
                    className="fa fa-clock pl-1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  24/7 Support
                </h3>
                <p className="text-sm text-gray-600">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="feature">
              <div className="icon rounded-full bg-gray-100 w-14 h-14   p-3 mb-5 relative">
              <i
                  width="24"
                  height="24"
                    className="fa fa-recycle w-24 pl-1"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Hassle Free Returns
                </h3>
                <p className="text-sm text-gray-600">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 w-full relative">
            <div className="relative">
              <img
                src={post2}
                alt="Why Choose Us"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="testimonial-section py-12 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-5xl text-gray-800">Testimonials</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-block text-center bg-gray-50 shadow-2xl p-6 rounded-lg">
                
                <div className="author-info flex flex-col items-center">
                  <div className="author-pic mb-3">
                    <img
                      src={person1}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.author}
                  </h3>
                  <span className="text-sm text-gray-500">
                    {testimonial.position}
                  </span>
                </div>
                <blockquote className="mb-5 text-gray-600 italic">
                  <p>&ldquo;{testimonial.text}&rdquo;</p>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-between items-center mt-6">
          <button className="prev  bg-gray-200  text-gray-800 rounded-full p-3 hover:bg-gray-800 hover:text-white transition">
            <span className="fa fa-chevron-left h-5 w-6"></span>
          </button>
          <button className="next bg-gray-200 text-gray-800 rounded-full p-3 hover:bg-gray-800 hover:text-white transition">
            <span className="fa fa-chevron-right h-5 w-6"></span>
          </button>
        </div>
      </div>
    </div>
        </>
    );
}