import { RedBar } from "./home-page";
import data from "../data/data.json";

const TestimonialsPage = () => {
  const { testimonials } = data.business;
  return (
    <>
      <div className="text-slate-950 mt-20 pt-8 px-12 min-h-[75vh] lg:min-h-[75vh]">
        <div className="text-4xl">
          <p className="text-red-900 mb-4">Testimonials</p>
          <RedBar height="h-1" />
          <div className="py-12 text-lg lg:text-xl grid lg:grid-cols-3 lg:gap-6">
            {testimonials &&
              testimonials.map((t) => <Testimonial testimonial={t} />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage;

const Testimonial = ({ testimonial }: { testimonial: string }) => {
  return (
    <div className=" border-solid border-2 border-red-950 pt-8 my-2">
      <RedBar height="h-1" />
      <div className="p-6 py-24">
        <p className="text-slate-300 italic">"{testimonial}"</p>
      </div>
    </div>
  );
};
