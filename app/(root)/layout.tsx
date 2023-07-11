import useStore from '@/hooks/useStore';

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await useStore({redirectToStore: true});

  return <div>{children}</div>;
}
