import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPostById } from "../../store/actions/post";
import { useNavigate, useParams } from "react-router-dom";
import arrowLeft from "../../assets/svg/arrow-left.svg";

interface IData {
  date: string;
  description: string;
  id: string;
  title: string;
}
export const InnerPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [data, setData] = useState<IData>({
    date: "",
    description: "",
    id: "",
    title: "",
  });

  const { id } = useParams();

  useEffect(() => {
    dispatch(getPostById(id as string) as any)
      .unwrap()
      .then((result: any) => {
        setData({
          date: result.createdAt,
          description: result.description,
          id: result.id,
          title: result.title,
        });
      });
  }, []);

  return (
    <Container>
      {/* <span>{getFormatDate(data.date)}</span> */}
      <BackToHome
        src={arrowLeft}
        alt=""
        onClick={() => navigate("/user/post")}
      />
      <h3>{data.title}</h3>
      <Image
        src="https://beta.ems.ladbiblegroup.com/s3/content/d0051ad45cfdc44feb1305e9124a9faa.jpg"
        alt=""
      />
      <Description>{data.description}</Description>
    </Container>
  );
};

const Image = styled("img")`
  width: 40%;
`;

const Container = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
`;

const Description = styled("p")`
  width: 40%;
  font-family: Inter;
  color: #858080;
  white-space: pre-line;
`;
const BackToHome = styled("img")`
  width: 40px;
  cursor: pointer;
`;
