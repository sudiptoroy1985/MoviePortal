import Layout from "../components/layout";

export default ({ statusCode }) => (
  <Layout title="Error!!">
    {statusCode ? 
      `Could not load requested data!` 
    : `The requested page is not available!!`
    }
  </Layout>
);
