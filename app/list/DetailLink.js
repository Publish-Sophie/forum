"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const DetailLink = ({ id }) => {
  const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // console.log(`pathname:, ${pathname}, searchParams: ${searchParams}`);

  return (
    <button
      onClick={() => {
        router.push(`/detail/${id}`);
      }}
    >
      게시글로 이동
    </button>
  );
};

export default DetailLink;
