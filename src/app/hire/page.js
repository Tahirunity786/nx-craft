import Team from '@/component/Team/Team';
import './hire.css';

const Page = () => {
  const teamMembers = [
    { id: 1, name: "Tahir Zaman", title: "Post Title Here", img: "/Assets/Images/member.svg" },
    { id: 2, name: "Tahir Zaman", title: "Post Title Here", img: "/Assets/Images/member.svg" },
    { id: 3, name: "Tahir Zaman", title: "Post Title Here", img: "/Assets/Images/member.svg" },
    { id: 4, name: "Tahir Zaman", title: "Post Title Here", img: "/Assets/Images/member.svg" },
    { id: 5, name: "Tahir Zaman", title: "Post Title Here", img: "/Assets/Images/member.svg" },
    { id: 6, name: "Tahir Zaman", title: "Post Title Here", img: "/Assets/Images/member.svg" },
    { id: 7, name: "Tahir Zaman", title: "Post Title Here", img: "/Assets/Images/member.svg" },
    { id: 8, name: "Tahir Zaman", title: "Post Title Here", img: "/Assets/Images/member.svg" },
  ];

  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-lg-6">
            <h1>Meet with Us!</h1>
          </div>
          <div className="col-lg-6 pe-4 ps-4" >
            <Team />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
