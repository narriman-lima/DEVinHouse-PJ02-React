/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Comments = styled.article`
  display: flex;
  gap: 10px;
  padding: 20px 0;
  border-bottom: 1px solid gray;
`;

const FormWrapper = styled.aside`
  margin: 60px 0;

  input {
     padding: 10px 12px;
     
     &:not(:first-of-type) {
       margin-top: 24px;
     }
  }

  form {
     display: flex;
     flex-direction: column;
  }

  .form__user-data {
     display: flex;
     justify-content: space-between;
     gap: 16px;
     margin-bottom: 16px
  }

   .form__user-field {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 60px;
   }

   .form__buttons {
      display: flex;
      margin-top: 16px;
      justify-content: center;
      gap: 24px;

      button {
         padding: 10px 14px;
         border: none;
         background-color: ${({theme}) => theme.colors.primary.main};
         font-size: 16px;
         font-weight: bold;
         text-transform: uppercase;
         color: ${({theme}) => theme.colors.primary.highlight};
         text-decoration: none;
         width: fit-content;
         white-space: nowrap;
         border-radius: 15px;
         &:hover {
            transform: scale(1.050);
         transition: all .2s ease-in-out;
         cursor: pointer;
      }
   }
`;

const NameComment = styled.p`
  width: 30%;
`;
const TextComment = styled.p`
  width: 60%;
`;
const RateComment = styled.p`
  width: 10%;
  display: flex;
  gap: 12px;
`;
const ArrowUp = styled.button`
  width: 0;
  height: 0;
  border: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid ${({theme}) => theme.colors.primary.arrowUp};
  background-color: transparent;
  cursor: pointer;
`;
const ArrowDown = styled.button`
  width: 0;
  height: 0;
  border: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 20px solid ${({theme}) => theme.colors.primary.arrowDown};
  background-color: transparent;
  cursor: pointer;
`;

const KEY_LOCALSTORAGE = "COMMENTS";

export const GameForm = ({ id }) => {
  const idGame = id;
  const [gameComment, setGameComment] = useState({});

  useEffect(() => {
    const storageComments = localStorage.getItem(KEY_LOCALSTORAGE);
    if (storageComments) {
      const items = JSON.parse(storageComments);
      const filter = items.find((item) => item.id === idGame);
      setGameComment(filter);
    }
  }, [idGame]);

  const handleSubmit = (values, { setSubmitting }) => {
    const storageComments = localStorage.getItem(KEY_LOCALSTORAGE);

    const comment = {
      id: Math.random().toString(16).slice(2),
      likes: 0,
      ...values,
    };

    const actualComments = gameComment?.comentarios
      ? [...gameComment?.comentarios]
      : [];
    const newCommentsList = [
      { id: idGame, comentarios: [...actualComments, comment] },
    ];

    if (storageComments) {
      const itemsLocalStorage = JSON.parse(storageComments);
      const allCommentsList = itemsLocalStorage.filter(
        (item) => item.id !== idGame
      );

      localStorage.setItem(
        "COMMENTS",
        JSON.stringify([...allCommentsList, ...newCommentsList])
      );
    } else {
      localStorage.setItem("COMMENTS", JSON.stringify(newCommentsList));
    }

    setGameComment(...newCommentsList);
    setSubmitting(false);
  };

  const setComentRate = (id, value) => {
    const storageComments = localStorage.getItem(KEY_LOCALSTORAGE);
    if (storageComments) {
      const items = JSON.parse(storageComments);
      items.map((comment) => {
        if (comment.id === idGame) {
          comment.comentarios.map((item) => {
            if (item.id === id) {
              item.likes += value;
            }
          });
        }
      });
      const filter = items.find((item) => item.id === idGame);
      setGameComment(filter);

      localStorage.setItem("COMMENTS", JSON.stringify(items));
    }
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required("Name is required"),
    email: Yup.string().required("E-mail is required").email("Invalid e-mail"),
    comentario: Yup.string().required("Comment is required"),
  });

  const initialValues = {
    nome: "",
    email: "",
    comentario: "",
  };

  return (
    <FormWrapper>
      <h1>Comments about the game</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <div className="form__user-data">
               <div className="form__user-field">
                  <Field name="name" placeholder="Name" />
                  <ErrorMessage
                  name="nome"
                  style={{ color: "red" }}
                  component="span"
                  />
               </div>
               <div className="form__user-field">
                  <Field name="email" placeholder="E-mail" />
                  <ErrorMessage
                  name="email"
                  style={{ color: "red" }}
                  component="span"
                  />
               </div>
            </div>

            <div className="form__user-field">
               <Field name="comentario" placeholder="Comment" />
               <ErrorMessage
               name="comentario"
               style={{ color: "red" }}
               component="span"
               />
            </div>

            <div className="form__buttons">
               <button type="submit" disabled={isSubmitting || !isValid}>
               Submit
               </button>

               <button type="button" disabled={isSubmitting} onClick={resetForm}>
               Reset
               </button>

            </div>
          </Form>
        )}
      </Formik>

      <section>
        <Comments>
          <NameComment>
            <strong>Name</strong>
          </NameComment>
          <TextComment>
            <strong>Comment</strong>
          </TextComment>
          <RateComment>
            <strong>Vote</strong>
          </RateComment>
        </Comments>
        {gameComment?.comentarios?.map((item) => (
          <Comments key={item.id}>
            <NameComment>{item.nome}</NameComment>
            <TextComment>{item.comentario}</TextComment>
            <RateComment>
              <ArrowUp onClick={() => setComentRate(item.id, 1)} />
              <span style={{width: '15px', color: item.likes > 0 ? 'green' : item.likes === 0 ? 'black' : 'red'}}>{item.likes > 0 ? `+${item.likes}` : item.likes}</span>
              <ArrowDown onClick={() => setComentRate(item.id, -1)} />
            </RateComment>
          </Comments>
        ))}
      </section>
    </FormWrapper>
  );
};
