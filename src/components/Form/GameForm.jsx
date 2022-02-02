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
  border-bottom: 20px solid black;
  background-color: transparent;
  cursor: pointer;
`;
const ArrowDown = styled.button`
  width: 0;
  height: 0;
  border: 0;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 20px solid black;
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
    nome: Yup.string().required("Campo obrigatório"),
    email: Yup.string().required("Campo obrigatório").email("E-mail inválido"),
    comentario: Yup.string().required("Campo obrigatório"),
  });

  const initialValues = {
    nome: "",
    email: "",
    comentario: "",
  };

  return (
    <FormWrapper>
      <h1>Comentários</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
        validateOnMount
      >
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <Field name="nome" placeholder="Nome" />
            <ErrorMessage
              name="nome"
              style={{ color: "red" }}
              component="span"
            />

            <Field name="email" placeholder="E-mail" />
            <ErrorMessage
              name="email"
              style={{ color: "red" }}
              component="span"
            />

            <Field name="comentario" placeholder="Comentário" />
            <ErrorMessage
              name="comentario"
              style={{ color: "red" }}
              component="span"
            />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Enviar
            </button>

            <button type="button" disabled={isSubmitting} onClick={resetForm}>
              Limpar
            </button>
          </Form>
        )}
      </Formik>

      <section>
        <Comments>
          <NameComment>
            <strong>Nome</strong>
          </NameComment>
          <TextComment>
            <strong>Comentário</strong>
          </TextComment>
          <RateComment>
            <strong>Voto</strong>
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
