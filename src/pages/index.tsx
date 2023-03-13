import { trpc } from './utils/trpc';

export default function IndexPage() {
  const {data} = trpc.hello.useQuery({ text: 'client' });
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <p>{data?.greeting}</p>
    </div>
  );
}