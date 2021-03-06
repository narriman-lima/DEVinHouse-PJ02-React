import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
  ${({ theme }) => ({
    color: theme.colors.primary.main,
    backgroundColor: theme.colors.primary.main,
  })}
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 28px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;

  h1 {
   display: flex;
   align-items: center;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.header_footer};
  }

  svg {
    width: 40px;
    margin-right: 12px;

    g {
       fill: ${({ theme }) => theme.colors.primary.header_footer};
    }
  }
`;

const HeaderList = styled.ul`
  display: flex;

  li {
    list-style-type: none;
    &:not(:last-of-type) {
      margin-right: 10px;
    }

    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }

    a {
      color: ${({ theme }) => theme.colors.primary.header_footer};
      text-decoration: none;
      padding: 5px;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 20px;

  nav {
    display: flex;
    align-items: center;
  }
`;

const ButtonThemeSwitcher = styled.button`
  background-color: ${({ theme }) => theme.colors.primary.header_footer};
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  outline: none;
  font-size: 28px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Header = ({ setTheme }) => {
  return (
    <HeaderStyle>
      <Link to={``}>
        <h1>
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path
                d="M1320 5024 c-132 -36 -241 -145 -279 -279 -9 -31 -80 -1473 -81
-1632 0 -27 11 -40 95 -108 52 -43 95 -80 95 -84 0 -3 -67 -49 -148 -102 -142
-93 -150 -97 -227 -108 -232 -33 -438 -163 -566 -359 -94 -143 -120 -244 -126
-484 l-5 -188 81 0 81 0 0 -398 0 -399 -59 -45 c-100 -78 -125 -166 -75 -266
47 -96 12 -87 854 -213 l745 -111 32 -38 c43 -50 115 -95 186 -115 47 -13 94
-16 265 -13 200 3 209 4 262 29 56 27 89 54 129 104 21 27 22 28 41 10 20 -18
22 -18 100 60 l80 80 0 -143 0 -142 560 0 560 0 0 389 c0 263 -4 399 -11 422
-18 53 -57 98 -105 122 l-44 21 0 306 0 305 640 640 640 640 0 297 0 298 -297
0 -298 0 -456 -456 -456 -456 -44 22 c-71 37 -174 68 -262 80 -80 12 -86 15
-229 108 -81 54 -148 100 -148 103 0 4 43 41 95 83 78 63 95 81 95 104 0 15
-16 380 -35 812 -36 827 -37 835 -89 924 -37 63 -127 141 -194 168 l-57 23
-645 2 c-545 2 -654 0 -700 -13z m1331 -159 c64 -23 104 -59 133 -118 l26 -53
34 -764 c18 -421 32 -768 29 -773 -3 -6 -566 -468 -620 -510 -10 -8 -13 74
-13 399 l1 409 82 39 c191 91 316 293 317 514 l0 72 -640 0 -640 0 0 -72 c1
-220 127 -424 319 -515 l80 -38 1 -409 c0 -325 -3 -407 -12 -399 -55 42 -618
504 -621 510 -3 5 11 352 29 773 l34 764 26 53 c28 58 69 95 130 117 60 22
1242 23 1305 1z m-187 -972 c-34 -140 -171 -264 -325 -294 l-59 -12 0 -543 0
-543 -40 -11 c-29 -8 -51 -8 -80 0 l-40 11 0 543 0 543 -59 12 c-133 26 -244
112 -301 234 -17 34 -30 68 -30 75 0 9 101 12 470 12 l470 0 -6 -27z m2416
-683 c0 -82 -3 -150 -7 -150 -24 2 -235 48 -240 53 -5 5 -51 216 -53 240 0 4
68 7 150 7 l150 0 0 -150z m-426 -54 l18 -89 -996 -996 -996 -996 -62 63 -63
62 1035 1035 c639 639 1037 1030 1041 1022 3 -6 14 -52 23 -101z m239 -225
c48 -10 90 -20 92 -23 2 -2 -461 -469 -1030 -1038 l-1035 -1035 -62 63 -63 62
995 995 c547 547 999 995 1005 995 5 -1 50 -9 98 -19z m-3799 -408 c37 -31 44
-42 40 -63 -22 -100 -46 -312 -51 -452 l-6 -168 -320 0 -320 0 6 98 c19 337
259 588 594 621 6 0 32 -16 57 -36z m2423 1 c45 -13 84 -28 87 -32 3 -5 -62
-75 -144 -157 -97 -96 -151 -144 -153 -134 -3 8 -12 66 -21 129 -9 63 -18 124
-21 135 -3 14 8 30 40 57 52 43 76 43 212 2z m-1722 -603 c219 -188 405 -339
412 -337 11 5 813 687 884 753 l27 25 11 -69 c6 -37 15 -112 19 -165 l8 -97
-358 -358 -358 -358 -80 80 -80 80 -178 -178 -177 -177 120 -120 120 -120 -50
0 c-47 0 -70 12 -432 229 -211 126 -396 232 -413 236 l-30 7 0 321 c0 315 9
483 31 620 l11 67 56 -49 c32 -27 237 -202 457 -390z m-970 -421 c98 -98 177
-181 175 -182 -3 -2 -33 -25 -67 -51 -34 -26 -65 -47 -70 -47 -4 0 -65 57
-135 127 l-128 128 0 102 c0 100 1 103 23 103 16 0 75 -53 202 -180z m255 80
c0 -55 -1 -100 -3 -100 -1 0 -47 45 -102 100 l-100 100 103 0 102 0 0 -100z
m2480 -505 l-240 -240 0 85 0 85 238 238 237 237 3 -82 3 -82 -241 -241z
m-2835 35 c-2 -3 -31 -28 -64 -54 l-61 -47 0 118 0 117 65 -64 c35 -35 62 -66
60 -70z m1900 -210 l340 -340 -63 -62 -62 -63 -342 342 -343 343 60 60 c33 33
62 60 65 60 3 0 158 -153 345 -340z m1175 148 c0 -31 -4 -35 -57 -55 l-57 -23
54 55 c30 30 56 55 57 55 2 0 3 -15 3 -32z m-640 -275 c-1 -58 -4 -72 -26 -97
l-26 -29 -36 36 -37 37 60 60 c33 33 61 60 62 60 2 0 3 -30 3 -67z m-663 -225
c95 -95 173 -180 173 -188 0 -31 -41 -82 -83 -100 -36 -17 -66 -20 -216 -20
-102 0 -189 5 -212 11 -54 17 -109 65 -109 96 0 23 43 298 55 351 5 21 10 22
113 22 l107 0 172 -172z"
              />
              <path
                d="M1918 4707 c-94 -36 -158 -128 -158 -227 0 -67 20 -113 74 -166 59
-60 112 -79 192 -71 62 6 99 24 143 69 54 54 66 85 66 168 0 51 -6 85 -17 105
-22 40 -75 93 -112 112 -41 21 -142 27 -188 10z m116 -158 c58 -27 55 -115 -5
-139 -63 -26 -125 36 -100 99 19 44 60 60 105 40z"
              />
            </g>
          </svg>
          DEVinMMO
        </h1>
      </Link>
      <NavWrapper>
        <nav>
          <HeaderList>
            <li>
              <Link to={``}>Games</Link>
            </li>
            <li>
              <Link to={`noticias`}>News</Link>
            </li>
          </HeaderList>
        </nav>
        <ButtonThemeSwitcher onClick={setTheme}>
          <i className="far fa-lightbulb"></i>
        </ButtonThemeSwitcher>
      </NavWrapper>
    </HeaderStyle>
  );
};
