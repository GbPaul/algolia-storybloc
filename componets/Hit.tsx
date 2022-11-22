import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Hit = ({ hit }: { hit: any }) => {
  return (
    <div className="hit_item">
      <img src={hit.image.url} alt={hit.name} />
      <div className="hit_item_content ">
        <p className="category">{hit.category}</p>
        <h2 className="title">{hit.title}</h2>
        <p className="description">{hit.description}</p>
        <div className="date_location">
          <p>{hit.date}</p>
          <p>{hit.location}</p>
        </div>
        <Link href="/" className="learn_more">
          Learn more
          <span>
            <BsArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hit;
