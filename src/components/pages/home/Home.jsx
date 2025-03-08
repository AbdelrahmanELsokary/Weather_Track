import { Loading } from './Loading';
import { Welcome } from './Welcome';
import { Api } from './api/Api_Data';
export function Home({ loading, data }) {
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  } else if (!data || !data.location || !data.current) {
    return (
      <>
        <Welcome />
      </>
    );
  } else {
    return (
      <>
        <Api data={data} />
      </>
    );
  }
}
