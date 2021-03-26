import "./Header.css";
export const Header = ({ setHomeOrDocs }) => {
  return (
    <div className="page-header">
      <div className="container header">
        <div className="icon-name">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 172 172"
            // style={{fill="#26e07f"}}
          >
            <g
              fill="none"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              // style="mix-blend-mode: normal"
            >
              <path d="M0,172v-172h172v172z" fill="none"></path>
              <g fill="#20a546">
                <path d="M44.72,10.32c-9.48687,0 -17.2,7.71313 -17.2,17.2c0,8.30438 5.92594,15.265 13.76,16.8775v76.325c1.12875,-0.16125 2.27094,-0.3225 3.44,-0.3225c1.54531,0 3.05031,0.14781 4.515,0.43c4.085,-17.32094 19.63219,-19.96812 37.3025,-22.8975c19.98156,-3.30562 42.55656,-7.08156 44.075,-36.335c7.88781,-1.57219 13.8675,-8.54625 13.8675,-16.8775c0,-9.48687 -7.71312,-17.2 -17.2,-17.2c-9.48687,0 -17.2,7.71313 -17.2,17.2c0,8.26406 5.87219,15.23813 13.6525,16.8775c-1.41094,23.39469 -18.54375,26.29719 -38.27,29.5625c-13.81375,2.28438 -28.81,4.8375 -37.3025,15.8025v-62.565c7.83406,-1.6125 13.76,-8.57312 13.76,-16.8775c0,-9.48687 -7.71312,-17.2 -17.2,-17.2zM44.72,127.28c-9.48687,0 -17.2,7.71313 -17.2,17.2c0,9.48688 7.71313,17.2 17.2,17.2c9.48688,0 17.2,-7.71312 17.2,-17.2c0,-9.48687 -7.71312,-17.2 -17.2,-17.2z"></path>
              </g>
            </g>
          </svg>
          <h3 className="fork-ui-heading">ForkUI</h3>
        </div>

        <div className="header-nav">
          <p onClick={() => setHomeOrDocs("Home")}>Home</p>
          <p onClick={() => setHomeOrDocs("Docs")}>Documentation</p>
          <a href="https://github.com/Rashita123/ForkUI">Github</a>
        </div>
      </div>
    </div>
  );
};
