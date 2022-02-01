import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const KEY_LOCALSTORAGE = 'COMMENTS';

export const GameForm = () => {
  const idGame = '1234';
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

    const actualComments = gameComment?.comentarios ? [...gameComment?.comentarios] : [];
    const newCommentsList = [{ id: idGame, comentarios: [...actualComments, comment] }];

    if (storageComments) {
      const itemsLocalStorage = JSON.parse(storageComments);
      const allCommentsList = itemsLocalStorage.filter((item) => item.id !== idGame);

      localStorage.setItem(
         'COMMENTS',
        JSON.stringify([...allCommentsList, ...newCommentsList])
      );
    } else {
      localStorage.setItem('COMMENTS', JSON.stringify(newCommentsList));
    }

    setGameComment(...newCommentsList);
    setSubmitting(false);
  };

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    email: Yup.string().required('Campo obrigatório').email('E-mail inválido'),
    comentario: Yup.string().required('Campo obrigatório'),
  });

  const initialValues = {
    nome: '',
    email: '',
    comentario: '',
  };

  return (
    <>
      <h1>Comentários</h1>

      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={schema} validateOnMount>
        {({ isSubmitting, resetForm, isValid }) => (
          <Form>
            <Field name="nome" placeholder="Nome" />
            <ErrorMessage name="nome" style={{ color: 'red' }} component="span" />

            <Field name="email" placeholder="E-mail" />
            <ErrorMessage name="email" style={{ color: 'red' }} component="span" />

            <Field name="comentario" placeholder="Comentário" />
            <ErrorMessage name="comentario" style={{ color: 'red' }} component="span" />

            <button type="submit" disabled={isSubmitting || !isValid}>
              Enviar
            </button>

            <button type="button" disabled={isSubmitting} onClick={resetForm}>
              Limpar
            </button>
          </Form>
        )}
      </Formik>

      {gameComment?.comentarios?.map((item) => (
        <p>{item.nome}</p>
      ))}
    </>
  );
};
