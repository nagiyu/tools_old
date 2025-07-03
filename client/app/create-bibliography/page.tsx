"use client";

import { useState } from "react";



const modes = ["Webページ", "書籍", "論文"];

type WebPageData = {
  url: string;
  pageName: string;
  siteName: string;
  accessDate: string;
};

type BookPaperData = {
  title: string;
  author: string;
  publishDate: string;
  accessDate: string;
};

export default function Page() {
  const [tab, setTab] = useState<"before" | "after">("before");
  const [mode, setMode] = useState<string>(modes[0]);

  const [webPageData, setWebPageData] = useState<WebPageData>({
    url: "",
    pageName: "",
    siteName: "",
    accessDate: "",
  });

  const [bookPaperData, setBookPaperData] = useState<BookPaperData>({
    title: "",
    author: "",
    publishDate: "",
    accessDate: "",
  });

  const [convertedText, setConvertedText] = useState<string>("");

  const clearData = () => {
    if (mode === "Webページ") {
      setWebPageData({ url: "", pageName: "", siteName: "", accessDate: "" });
    } else {
      setBookPaperData({ title: "", author: "", publishDate: "", accessDate: "" });
    }
  };

  return (
    <div>
      <h1>参考文献つくーる</h1>
      <div>
        <button onClick={() => setTab("before")} disabled={tab === "before"}>
          変換前
        </button>
        <button onClick={() => setTab("after")} disabled={tab === "after"}>
          変換後
        </button>
      </div>

      {tab === "before" && (
        <div>
          <div>
            <label htmlFor="mode">モード: </label>
            <select
              id="mode"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              {modes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {mode === "Webページ" && (
            <div>
              <div>
                <label htmlFor="url">URL: </label>
                <input
                  id="url"
                  type="text"
                  value={webPageData.url}
                  onChange={(e) =>
                    setWebPageData({ ...webPageData, url: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="pageName">ページ名: </label>
                <input
                  id="pageName"
                  type="text"
                  value={webPageData.pageName}
                  onChange={(e) =>
                    setWebPageData({ ...webPageData, pageName: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="siteName">サイト名: </label>
                <input
                  id="siteName"
                  type="text"
                  value={webPageData.siteName}
                  onChange={(e) =>
                    setWebPageData({ ...webPageData, siteName: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="accessDate">閲覧日: </label>
                <input
                  id="accessDate"
                  type="date"
                  value={webPageData.accessDate}
                  onChange={(e) =>
                    setWebPageData({ ...webPageData, accessDate: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          {(mode === "書籍" || mode === "論文") && (
            <div>
              <div>
                <label htmlFor="title">タイトル: </label>
                <input
                  id="title"
                  type="text"
                  value={bookPaperData.title}
                  onChange={(e) =>
                    setBookPaperData({ ...bookPaperData, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="author">著者: </label>
                <input
                  id="author"
                  type="text"
                  value={bookPaperData.author}
                  onChange={(e) =>
                    setBookPaperData({ ...bookPaperData, author: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="publishDate">発行日: </label>
                <input
                  id="publishDate"
                  type="date"
                  value={bookPaperData.publishDate}
                  onChange={(e) =>
                    setBookPaperData({ ...bookPaperData, publishDate: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="accessDate">閲覧日: </label>
                <input
                  id="accessDate"
                  type="date"
                  value={bookPaperData.accessDate}
                  onChange={(e) =>
                    setBookPaperData({ ...bookPaperData, accessDate: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          <div>
            <button onClick={() => {}}>
              Convert
            </button>
            <button onClick={clearData}>Clear</button>
          </div>
        </div>
      )}

      {tab === "after" && (
        <div>
          <textarea
            readOnly
            value={convertedText}
            rows={10}
            cols={50}
          />
          <div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(convertedText);
              }}
            >
              Copy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

