import { FC } from "react";
import { Formik, Form, Field } from "formik";

interface ISerchBarProps {
  onFunc: (serchQuery: string) => void;
}

type QueryValue = {
  query: string;
};

const SerchBar: FC<ISerchBarProps> = ({ onFunc }) => {
  const initialState: { query: string } = { query: "" };
  const handleSubmitForm = (value: QueryValue, { resetForm }: any): void => {
    onFunc(value.query);
    resetForm();
  };

  return (
    <div>
      <Formik onSubmit={handleSubmitForm} initialValues={initialState}>
        <Form>
          <Field type="text" name="query" />
          <button type="submit">serch</button>
        </Form>
      </Formik>
    </div>
  );
};

export { SerchBar };
