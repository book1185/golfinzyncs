import Image from "next/image";
import "./globals.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
export default function Home() {
  return (
    <div>
      <div className="landing-header">
        <div className="flex flex-col justify-center h-full items-center">
          <span className="text-4xl md:text-7xl text-white font-extrabold drop-shadow-md md:leading-tight pb-5">
            GOLF IN ZYNCS <br /> ACADEMY
          </span>
          <span className="text-white text-center">
          &quot;เราคือสถาบันกอล์ฟที่มีเทคโนโลยีเครื่องมือครบคัน สอนโดย TPI
            Certified Coach&quot;
          </span>
        </div>
      </div>
      <div className="bg-black  p-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-4xl pb-20">
            SPECIAL OFFER <span className="text-[#c7a84a]">PRICELIST</span>
          </span>

          <div className="md:space-y-0 md:flex md:gap-x-7  space-y-14">
            <div className="relative">
              <div
                className="absolute z-10 inset-x-1/2 rounded-full h-28 w-28 -translate-x-1/2  -top-12 flex flex-col justify-center align-middle"
                style={{
                  background: "linear-gradient(to bottom, #c7a84a, #7e6b30)",
                }}
              >
                <div className="flex justify-center  items-end">
                  <span className=" text-5xl mr-1 font-bold">3</span>
                  <span className="align-bottom">ครั้ง</span>
                </div>
                <div className="flex justify-center">
                  <div className="text-[10px] text-white">
                    1 ครั้ง = 1 ชั่วโมง
                  </div>
                </div>
              </div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/pricelist1.png"
                    alt="pricelist1"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      className="text-[#a3893c] font-extrabold"
                    >
                      Mini Course
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      เด็ก{" "}
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        อายุไม่เกิน 15 ปี
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      className="pb-2 font-bold"
                    >
                      ราคา: 5,700 บาท
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      ผู้ใหญ่{" "}
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        อายุ 15 ปีขึ้นไป
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      className="pb-2 font-bold"
                    >
                      ราคา: 6,600 บาท
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="relative">
              <div
                className="absolute z-10 inset-x-1/2 rounded-full h-28 w-28 -translate-x-1/2  -top-12 flex flex-col justify-center align-middle"
                style={{
                  background: "linear-gradient(to bottom, #c7a84a, #7e6b30)",
                }}
              >
                <div className="flex justify-center  items-end">
                  <span className=" text-5xl mr-1 font-bold">5</span>
                  <span className="align-bottom">ครั้ง</span>
                </div>
                <div className="flex justify-center">
                  <div className="text-[10px] text-white">
                    1 ครั้ง = 1 ชั่วโมง
                  </div>
                </div>
              </div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/pricelist2.png"
                    alt="pricelist2"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      className=" font-extrabold text-[#a3893c]"
                    >
                      Medium Course
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      เด็ก{" "}
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        อายุไม่เกิน 15 ปี
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      className="pb-2 font-bold"
                    >
                      ราคา: 8,500 บาท
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      ผู้ใหญ่{" "}
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        อายุ 15 ปีขึ้นไป
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      className="pb-2 font-bold"
                    >
                      ราคา: 10,000 บาท
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
            <div className="relative">
              <div
                className="absolute z-10 inset-x-1/2 rounded-full h-28 w-28  -translate-x-1/2  -top-12 flex flex-col justify-center align-middle"
                style={{
                  background: "linear-gradient(to bottom, #c7a84a, #7e6b30)",
                }}
              >
                <div className="flex justify-center  items-end">
                  <span className=" text-5xl mr-1 font-bold">10</span>
                  <span className="align-bottom">ครั้ง</span>
                </div>
                <div className="flex justify-center">
                  <div className="text-[10px] text-white">
                    1 ครั้ง = 1 ชั่วโมง
                  </div>
                </div>
              </div>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/pricelist3.png"
                    alt="pricelist2"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      className=" font-extrabold text-[#a3893c]"
                    >
                      Mega Course
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      เด็ก{" "}
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        อายุไม่เกิน 15 ปี
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      className="pb-2 font-bold "
                    >
                      ราคา: 15,000 บาท
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      ผู้ใหญ่{" "}
                      <Typography
                        variant="subtitle2"
                        component="span"
                        sx={{ fontSize: "0.8rem" }}
                      >
                        อายุ 15 ปีขึ้นไป
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      className="pb-2 font-bold"
                    >
                      ราคา: 18,000 บาท
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black smoke-background p-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-4xl pb-10">
            IMPROVE SWINGS WITH{" "}
            <span className="text-[#c7a84a]">TECHNOLOGY</span>
          </span>
          <span className="text-white  lg:w-2/4 pb-3">ทางสถาบัน GOLF IN ZYNCS ACADEMY ได้นำเทคโนโลยีมาช่วยให้วงสวิงถูกต้อง และ เข้าใจง่ายมากขึ้นด้วยเครื่องมือต่างๆเช่น Trackman, Smart2move, และ Swing Catalyst ซึ่งเป็นที่ยอมรับทั่วโลก วิเคราะห์ละเอียดโดยผู้เชี่ยวชาญทำให้มั่นใจได้ว่า วงสวิงได้ถูกสอนหรือแก้ไขอย่างถูกต้อง</span>
          <Image
          className="pt-2"
            src="/technology.png" // Provide the path to your image relative to the public directory
            alt="technology"
            width="800" // Set the width (adjust as needed)
            height="800" // Set the height (adjust as needed)
          />
        </div>
      </div>
    </div>
  );
}
