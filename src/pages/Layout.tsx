import { NavLink, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.325rem;
  width: 8rem;
  height: 3rem;
  text-decoration: none;
  transition: color 0.25s ease-in-out 0s;
  font-weight: 600;
  margin: auto;
  padding-top: 20px;
  a {
    color: #777;
  }
  .active {
    color: rgb(50, 148, 248);
  }
`;

const Profile = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #eee;
`;

const ProfilePicture = styled.img`
  display: block;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.h2`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
`;

const Description = styled.p`
  white-space: pre-wrap;
  font-size: 1.125rem;
  line-height: 1.5;
  margin-top: 0.25rem;
  color: #222;
  letter-spacing: -0.004em;
`;

const Layout = () => {
  return (
    <div>
      <Profile>
        <div>
          <ProfilePicture
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhIQEBEQFhUVFxUQEhUVEBUVEhcYFRUWFhYVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0eGh0tKy0tKystKystLS0tLS0rKystLS0tLS0tLS0rLTc3LTctLS0tKy0tKystLSsrKysrN//AABEIASwAqAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABEEAACAQIEAggEAQgGCwAAAAAAAQIDEQQFEiEGMQcTQVFhcYGRFCIyobEIQlJicrLB0RUjJJKi4RczQ1SCg5PC0vDx/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAQEAAgMAAgMAAAAAAAAAAQIRAyESMUETIjJRYf/aAAwDAQACEQMRAD8A4cyCWQAAAAAAAAAAAAAAAAAAAAAAAABKBAAlkEsgAAAAAAAAAAAAAAAAAAAAAAAAAAAJZBLIAAAAAAAAAAAAAAAAAAAAAAAAAAlAAyCWQAAAAAAAAAAAAAAAAAAAAAAAABKAQAMglkAAAAAAAAAAVcPh5zemnCU5dkYxcn7IzmG4JzGe8cFiPWGn96wGvA2z/Rxmn+5z/wCpS/8AMtMTwTmMN5YLEekNX7twvGvArYjDTg9NSEoS7pRcX7MohAAAAAAAAEoBAAyCWQAAAAlIu8qyyriKsaFCnKdSXKMV7t9yXaztnAvR7hsLUTxOitilFTtzpU79kYv6n+s/RILJ1zrhfo3xuMSqaVRpPlUqpptfqQ5y+y8TqORdFeX0LOrGWIn31XaHpTjt73N7sQ2r2vuRuZW+FwlOlHRShCEe6EVFeyKtirpGknGlKxNiook6ScVa4rCwqR0VYQnF81OKkvZmm550WYCvd04Sw8++k/k9actvaxvigNISzr5y4o6NcbhE6iiq1Jfn0k20u+cOa9LrxNMaPsHSc/456MqGLUq2GUaOI57K1Ko+6UV9L/WXqmalZuP9Pn0F7m2V1cNVlQr05QnHmmvZp9qfYyyK5gAAlAIAGQAAL7Jsqq4mtDD0IuVSbtFdi7232JLdss4xb2Su+R0LhJSyvF0+ugtc4wVW63hGpZ6b99rX8gOtcE8H0cvo6IWlVkl11Vr5pP8ARX6ME+S99zReJeLJ4fMqrhyWmMl5Lc69BppSXJ7pnzx0g1V/SOJ07/Pb1Ena3q8j6AweIVSnCquUoqa9Vc5xPjaEMyr9bNqnC9KHdsle6Xjc2/rfhcrUpvenh1v46Fb7nzqqznNzm7yk3KT8XuxMprfH1HgcVCrTjUptOMleLLmxrXR3hpU8BQVTm052fNKUm19jYutRHSPekaSFNWuVI8iDzpGk9k2Ap6SHEq2IsFavxtwdQzCloqJRqxTdGql80X3P9KD2uvY+bc7ymtha08PiIOM4OzXY12Si+2LXJn1y0aP0p8GrHYfraUV8TRTlTaW8483Sf8O5+bLGNZ6+bwepxabTTTWzT2at2WPJXNKAQAgIkgDo3QvwusTiniakb0sNaSutpVX9C9LavRGydNGUuE6WLjykuql5pXi/uzeOjbJPhMvoU3bXNdfV/aqb29FpXoVuPMqWIwNem1uoupDwlHdCVrnpjei/OvicFBSd50v6qfp9L9jkWYYXr83qUl+finH2nv8AZMq8A8ZPASqaoSnColdK1043s/uYvLM20Y6GMkm7VnXa7bSk217M3J7c9Xs46n02Y90sLQw0XbrJfN+zBLb3NH6NuF/i63W1F/U0neX60uaj/FlLpH4kWYYum6V+rjGNKF1a8pO8n7tL0Op1VSyzAOEbLTC93zlJ8353H1Fn9tf8anxjxrUjW+HoSUYQtB22d/DuRj8NxlVhJx6xu3Y90aFicTKc3N85Nt+pRr4h6ronxlP5b127J+N1UtCo0mmr9zNupZ5T0r5lzS59582LHuyd91yZWef1vktN/K9S37TPwrc8s/X0XiM7ilUs/pSfum/4HvC53TdlqV7K/m+z7M+davEuIlrvN/MlF79iVvwLzJs9lHW51Hdq68WotLy52Hxp/LH0pQxEZcmmVbHHMo4x6uKip3fyptd29/vY3jJeK4VNm9235K7tFeb7PIzfTcsramjw0eoVE1s0SydV899NPC6w2JWKpRtSxLcpW5Rqrea8NV9X945wfUnSLkXxmAr0kvnUetpftw+ZL1Sa9T5cZqVz1OURABWUsucuw0qlSMIRcm3eyV3srvbyRbM6D0HYNVMy+ZX0UatT7xh/3gbXwd0iShKFDFv5doqfd2Wa7DpWZ5pRjh6tVzjo6uTvfa2lml8YdG0Kuqrh/knz0pfK35dhyXM54qjqwtWdVRT3g5PS7ctu4snattyxzhtf1IiTKWxR1nVwVlJxakuaaa807o2njvjGWNUKcU4wSUpeMrfgahq3K+Hp6mSxZbPpQsQqTk+Rmf6Im7SUZOL5rS1JejMjTyjTFO3NNPw8fwHYTFam1bkeWjIYnDNSt37p9hksuy6LadWyV007ejQJGBVF2vY9dUzYp1KMJ9XdOPJvn4xfuecRGmlrjZpvS/v/AJE6vxYKGrsuZ7JM+nRlDU3ZO77+2z892bBgcgpSoqStulNfyNMzSnpqOMXydtjPrTVlx7dj4O4tvaM5X1O7b5R8Do1Kakk0fNOXVZ00pbpJo7XwJnyrUoqUvm5b8zlqcdsa7G2M+UeOMs+Gx+LoWso1ZOP7Mnqj9pI+sLHzx074bRmWpL/WUKc/VOcH+6hk25yADbmlnVfyeYr4zEu26obPuvVhc5Uzp35Pte2YVYfpYefvGpTf8WFj6BaOX9M3D0XRji4JKUHaVlzTtzOomqdKCTy3EX7En90WfbWvp83NlKRUIcTq8leDL4HRa0rXMTNHr4qS5bCtStooVVDeM3L931Rd1M6snrS7rp/iaZ8ZP86Uvc8TquXNsz8XT52L7H5jduy25rvRbvMZtablppZMdjXGOq+Hp6n81RRVpO8k2rqLaW3fa3qeKVdrZ3tztc9Yd9jaS8rnivFX+W9uy/N+I4nWx0uKKmhQW21tu4xlSd5a35lhTVi5hIki61a6EsPTqYNVILdbvbe5PAuZdXWjF25899nua5kWcujCVKSvCTXjYzTqR+WrB7XTtZbctkkcdR6s2WR3fCz1RT70cN/KFj/a8K++i17VH/M7BwxjHUpRbtyXZZ/icZ/KCxF8dQp/oYdP+/Un/Izn7N/TlqBKBtyGbn0QZh1Oa4W7sqjlQf8AzItR/wASiaYytgcVKlUp1Y/VTnGpHzi1JfdAfZUmc56Wc2jHCVKakrzWi3n/APDdMJmkK2Hp4iDvCrCNRPwkr/zXocL6VcZqrKMZXXMs+27fTR1I9IoRkVHI6vL+oqcmygi5k/k9S1uGoqKJ6VJ9h4jMuaNYJVBTa2aPSjfde3aZSlTU19EZdzs0/dbM9Ucm1SSi5Rbts4v8RbxZOsRCLbsk7+RksNklaS1KDt5WZvuRZBSp2lpU5Wu7rf0NhUKVuWl9zRz15OO2fB37ciq5ZOH1QZ5pw7LHTM/6qnTcpW5beLsznNCvGU92ld9ozu6Z8njmXuOH5fKpWabjdq67rrkbNkOE00E5xb3Vrq+nez39L+pj8FhY1JOEZJtqVt+1J7I8ZFVar6ak5RT2a5ptbLYzVx607pwrTiqScb8l27ehwXphzDrs1xFuVPRQX/BHf/E5HZclx1PDUalSX0whKo5PZ2im7HzZmOLlVq1K0/qqTlVl5zk5P8TGXXyLcAG3JLIJZAHaeiXibXgauBnL56F507vd05ttpeUm/wC8jReK03Vlqd973MBkeaTw1aFaHZtKL5Si9pRfg0ZrOasakusg7xktS57X7Ny5+1t/qwbRB6lzB1edd4WKcWmWNaFnYyOW93eW+Y07SewWLNIuqeGZbRL3D4hIFbFwth25WtT9W0/sbrPL42TVk/D+ZzjBYxKV915OxuWAzDXG0Wu45benxc4y+HTT2k1Ll4MvZ14yThUspck+VzWZ41025VL27LFCrnVOSW/Lffncxx2upGL4yxsm40ruyu/df5mpQTuZ3Nq3Wu77OTLLDZdKT2O2eSe3k8lutMlwtD+04dJu8qkYxt5q/obBxZl/VYuXV2s7S8m+ZneBeF1TdPEVecFLQrdsnvJ+SX3LDi6tB1qlWb0xW907qy713+Ry1ruvTrjx2Z9sPxjn04YKOFcnrrNa9/8AZxafPxaXsznLLzN8wlXqyqS7dorsjFcl/wC+JZF4zq9AAESyCWQALrCYnTs+XZ4FqCwZCRMEWtCtbZ8i9pq/LzOkvXKzi7wzSZGawas328y5wkbWcbd25OMUpreNmt33egOMG0RYvVQKVWgVFKM2ZzJc2cWk7WMH1ZMIsljWdcrq+HVKtFXaZRxHDFKV9N0znNHG1IfTJoylLiisrfNy+5xuNfj0fy5v+TZ6nB0vzZXLrBZLHDLrK84RS7G92atW4yxLhpjLS77ySV7W5FvSnUrfPiatklfVNtK3gyc1+rN4/HSpcUU1DRRabttfZepyjirPHWm4Q+hO7tylLv8AIp5tnMXHqaKtH86bVpy8PCP4mDYmeGvJ30EAGnIAAEsglkAAAAK+HxMo8uT2ZQBejYctxUGrKSUu57exlsPTcou/dZdzNJLzDZrVhsptrue6+5ZoZ7qyhWprvLF5039UN+9P+A+Pg+d16Gvkxcqyp77kTp23KUsbB82/Z3KMsXHx9i9jPKqzdz1CBZPFeB4qYqT2v7E+S/GryWIUH2MtMVjJz+puy5LsXoUGyDFrcnAAEUAAEoBAAyCWQAAAAAAAAAAAAAAAAAAAAAAAAAAAEsglkAAAAAAAAAAAAAAAAAAAAAAAAAASiAJZBLIAAAAAAAAAAAAAAAAAAAAAAAAAlAEASyCWQAAAAAAAAAAAAAAAAAAAAAAAAAAAEsg9yRFgPIPVhYDyD1YhoCAAAAAAAAAAAAAAAAAAAAAH/9k="
            alt="프로필 사진"
          />
        </div>
        <div>
          <Name>동재</Name>
          <Description>실전코딩 Devlog</Description>
        </div>
      </Profile>
      <Nav>
        <NavLink to="/">포스트</NavLink>
        <NavLink to="/resume">소개</NavLink>
      </Nav>
      <Outlet />
    </div>
  );
};

export default Layout;
