import React from "react";

import { Img, Text, Line, Input, Button, SelectBox, List } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DashboardDesignPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray_50 flex flex-col font-roboto items-center justify-end mx-[auto] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-evenly w-[100%]">
          <aside className="flex flex-col md:hidden sm:hidden md:px-[20px] sm:px-[20px] w-[270px]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="bg-white_A700 flex flex-col gap-[38px] justify-end p-[19px] w-[100%]">
                <div className="flex flex-row gap-[9px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[37px] mr-[auto] mt-[7px] md:w-[100%] sm:w-[100%] w-[60%]">
                  <Img
                    src="images/img_signal.svg"
                    className="h-[31px] w-[31px]"
                    alt="signal"
                  />
                  <Text
                    className="mb-[4px] mt-[7px] text-black_900 text-left tracking-ls017 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    <span className="text-black_900 text-[17px] font-roboto font-bold">
                      Manager{" "}
                    </span>
                    <span className="text-blue_A700 text-[17px] font-roboto font-bold">
                      Pro
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[11px] mr-[14px] md:w-[100%] sm:w-[100%] w-[90%]">
                  <div className="md:h-[323px] sm:h-[323px] h-[336px] relative w-[100%]">
                    <div className="absolute bg-blue_50 h-[56px] inset-x-[0] mx-[auto] rounded-radius8 top-[0] w-[100%]"></div>
                    <div className="absolute flex flex-col h-[max-content] inset-y-[0] items-start justify-start left-[12%] my-[auto] w-[63%]">
                      <div className="flex flex-row gap-[14px] items-end justify-start md:w-[100%] sm:w-[100%] w-[87%]">
                        <Img
                          src="images/img_home.svg"
                          className="h-[26px] w-[26px]"
                          alt="home"
                        />
                        <Text
                          className="mb-[2px] mt-[6px] text-blue_A700 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Dashboard
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[36px] md:w-[100%] sm:w-[100%] w-[73%]">
                        <Img
                          src="images/img_cart.svg"
                          className="h-[23px] w-[23px]"
                          alt="cart"
                        />
                        <Text
                          className="mt-[3px] text-bluegray_201 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Ordenes
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[35px] md:w-[100%] sm:w-[100%] w-[75%]">
                        <Img
                          src="images/img_user.svg"
                          className="h-[23px] w-[23px]"
                          alt="user"
                        />
                        <Text
                          className="mt-[4px] text-bluegray_201 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Usuarios
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[15px] items-start justify-start mt-[36px] md:w-[100%] sm:w-[100%] w-[75%]">
                        <Img
                          src="images/img_computer.svg"
                          className="h-[24px] w-[24px]"
                          alt="computer"
                        />
                        <Text
                          className="mt-[4px] text-bluegray_201 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Lectores
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[14px] items-center justify-start mt-[35px] w-[100%]">
                        <Img
                          src="images/img_sort.svg"
                          className="h-[27px] w-[auto]"
                          alt="sort"
                        />
                        <Text
                          className="text-bluegray_201 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Transaciones
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[13px] items-center justify-start mt-[31px] md:w-[100%] sm:w-[100%] w-[78%]">
                        <Img
                          src="images/img_file.svg"
                          className="h-[27px] w-[27px]"
                          alt="file"
                        />
                        <Text
                          className="text-bluegray_201 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Reportes
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Line className="bg-indigo_50 h-[1px] mt-[33px] w-[100%]" />
                  <div className="flex flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[25px] mt-[32px] md:w-[100%] sm:w-[100%] w-[88%]">
                    <div className="flex flex-row items-center justify-start md:ml-[0] sm:ml-[0] ml-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                      <Img
                        src="images/img_volume.svg"
                        className="h-[22px] w-[22px]"
                        alt="volume"
                      />
                      <Text
                        className="ml-[16px] text-gray_800 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Mensajes
                      </Text>
                      <div className="bg-red_A100 h-[16px] ml-[61px] my-[3px] rounded-radius50 w-[16px]"></div>
                    </div>
                    <div className="flex flex-row gap-[15px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[2px] mt-[37px] md:w-[100%] sm:w-[100%] w-[55%]">
                      <Img
                        src="images/img_settings.svg"
                        className="h-[23px] w-[23px]"
                        alt="settings"
                      />
                      <Text
                        className="mt-[3px] text-bluegray_201 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Supporte
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[13px] items-end justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[53%]">
                      <Img
                        src="images/img_settings_bluegray_200.svg"
                        className="h-[27px] w-[27px]"
                        alt="settings One"
                      />
                      <Text
                        className="mb-[3px] mt-[6px] text-bluegray_201 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                  <div className="bg-bluegray_51 flex flex-col items-center justify-start mt-[310px] p-[10px] rounded-radius8 w-[100%]">
                    <div className="flex flex-row items-start justify-between md:w-[100%] sm:w-[100%] w-[96%]">
                      <Img
                        src="images/img_rectangle26.png"
                        className="h-[35px] md:h-[auto] sm:h-[auto] object-cover rounded-radius4 w-[35px]"
                        alt="RectangleTwentySix"
                      />
                      <div className="flex flex-col items-start justify-start mt-[5px] w-[auto]">
                        <Text
                          className="font-bold font-spartan text-black_900 text-left tracking-ls06000000000000001 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Remoto Agency
                        </Text>
                        <Text
                          className="font-medium font-roboto mt-[2px] text-bluegray_202 text-left tracking-ls012 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          variant="body3"
                        >
                          Company
                        </Text>
                      </div>
                      <Img
                        src="images/img_vector.svg"
                        className="h-[8px] mt-[15px] w-[auto]"
                        alt="Vector"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-1 flex-col gap-[38px] items-center justify-start md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start p-[12px] w-[100%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="flex-1 font-medium leading-[normal] p-[0] text-[14px] placeholder:text-gray_400 text-gray_400 text-left w-[100%]"
                wrapClassName="flex md:ml-[0] md:w-[100%] ml-[39px] sm:ml-[0] sm:w-[100%] w-[46%]"
                name="SearchField"
                placeholder="Buscar"
                prefix={
                  <Img
                    src="images/img_search.svg"
                    className="cursor-pointer mr-[14px] my-[auto]"
                    alt="search"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#c1c9ce"
                      className="cursor-pointer ml-[10px] mr-[22px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
              ></Input>
              <Button
                className="flex h-[35px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[272px] md:mt-[0] sm:mt-[0] my-[5px] w-[35px]"
                shape="icbRoundedBorder10"
                size="smIcn"
              >
                <Img
                  src="images/img_home_bluegray_300.svg"
                  className="h-[22px]"
                  alt="home One"
                />
              </Button>
              <Img
                src="images/img_notification.svg"
                className="h-[37px] md:ml-[0] sm:ml-[0] ml-[13px] w-[auto]"
                alt="notification"
              />
              <div className="flex md:flex-1 sm:flex-1 flex-row gap-[12px] items-center justify-center md:ml-[0] sm:ml-[0] ml-[18px] md:w-[100%] sm:w-[100%] w-[14%]">
                <Img
                  src="images/img_rectangle23.png"
                  className="h-[35px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 w-[35px]"
                  alt="RectangleTwentyThree"
                />
                <SelectBox
                  className="font-bold leading-[normal] text-[15px] text-black_900 text-left tracking-ls015 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[69%]"
                  placeholderClassName="text-black_900"
                  name="GroupFive"
                  placeholder="Ernesto Ho"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_bluegray_800.svg"
                      className="h-[4px] mr-[0] w-[8px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
            </div>
            <div className="flex flex-col font-spartan items-center justify-start md:w-[100%] sm:w-[100%] w-[90%]">
              <div className="flex flex-col gap-[13px] items-start justify-start w-[100%]">
                <Text
                  className="text-black_900 text-left tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Analíticas
                </Text>
                <div className="flex md:flex-col sm:flex-col flex-row font-roboto gap-[14px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="bg-white_A700 flex flex-row gap-[12px] items-end justify-between px-[17px] py-[34px] rounded-radius17 shadow-bs w-[244px]">
                    <Button
                      className="flex h-[55px] items-center justify-center w-[55px]"
                      shape="icbRoundedBorder27"
                      variant="icbFillLightblue50"
                    >
                      <Img
                        src="images/img_icontotalrevenue.svg"
                        className="h-[32px]"
                        alt="IconTotalRevenue"
                      />
                    </Button>
                    <div className="flex flex-row h-[56px] md:h-[auto] sm:h-[auto] items-end justify-start w-[146px]">
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[64%]">
                        <Text
                          className="font-medium font-roboto text-bluegray_301 text-left w-[auto]"
                          variant="body1"
                        >
                          Ganancia total
                        </Text>
                        <Text
                          className="font-spartan text-black_900 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $52.6k
                        </Text>
                      </div>
                      <Text
                        className="bg-green_50 px-[10px] py-[3px] rounded-radius10 text-green_400 text-left w-[55px]"
                        variant="body4"
                      >
                        +3,4%
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-row gap-[12px] items-end justify-between px-[17px] py-[34px] rounded-radius17 shadow-bs w-[253px]">
                    <Img
                      src="images/img_cut.svg"
                      className="h-[55px] w-[55px]"
                      alt="cut"
                    />
                    <div className="flex flex-row h-[56px] md:h-[auto] sm:h-[auto] items-end justify-start w-[159px]">
                      <div className="flex flex-col gap-[15px] items-start justify-start w-[67%]">
                        <Text
                          className="font-medium font-roboto text-bluegray_301 text-left w-[auto]"
                          variant="body1"
                        >
                          Ganancia de hoy
                        </Text>
                        <Text
                          className="font-spartan text-black_900 text-left w-[auto]"
                          as="h2"
                          variant="h2"
                        >
                          $1024
                        </Text>
                      </div>
                      <Text
                        className="bg-deep_orange_50 px-[10px] py-[3px] rounded-radius10 text-left text-red_300 w-[55px]"
                        variant="body4"
                      >
                        -5,5%
                      </Text>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[14px] grid sm:grid-cols-1 grid-cols-2 md:w-[100%] sm:w-[100%] w-[50%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-row gap-[12px] items-end justify-between px-[17px] py-[34px] rounded-radius17 shadow-bs w-[254px]">
                      <Img
                        src="images/img_floatingicon_light_blue_50.svg"
                        className="h-[55px] w-[55px]"
                        alt="floatingicon"
                      />
                      <div className="flex flex-col h-[56px] md:h-[auto] sm:h-[auto] items-end justify-start w-[143px]">
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[83%]">
                          <Text
                            className="font-medium font-roboto text-bluegray_301 text-left w-[auto]"
                            variant="body1"
                          >
                            Lectores Vendidos
                          </Text>
                          <Text
                            className="font-spartan text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            22
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-row gap-[12px] items-end justify-between px-[17px] py-[34px] rounded-radius17 shadow-bs w-[254px]">
                      <Img
                        src="images/img_iconusers.svg"
                        className="h-[55px] w-[55px]"
                        alt="IconUsers"
                      />
                      <div className="flex flex-col h-[56px] md:h-[auto] sm:h-[auto] items-end justify-start w-[143px]">
                        <div className="flex flex-col gap-[18px] items-start justify-start w-[76%]">
                          <Text
                            className="font-medium font-roboto text-bluegray_301 text-left w-[auto]"
                            variant="body1"
                          >
                            Usuarios Activos
                          </Text>
                          <Text
                            className="font-spartan text-black_900 text-left w-[auto]"
                            as="h2"
                            variant="h2"
                          >
                            11
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex md:flex-col sm:flex-col flex-row gap-[14px] items-center justify-between mt-[20px] w-[100%]">
                <div className="flex h-[393px] md:h-[718px] sm:h-[718px] justify-end relative md:w-[100%] sm:w-[100%] w-[auto]">
                  <Line className="bg-gray_100 h-[260px] mb-[43px] ml-[auto] mr-[40px] mt-[auto] w-[1px]" />
                  <div className="absolute bg-white_A700 flex flex-col gap-[33px] h-[max-content] inset-[0] items-center justify-center m-[auto] p-[19px] rounded-radius17 shadow-bs w-[100%]">
                    <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[6px] md:w-[100%] sm:w-[100%] w-[96%]">
                      <Text
                        className="md:mt-[0] sm:mt-[0] mt-[2px] text-black_900 text-left tracking-ls08 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Reportes
                      </Text>
                      <Button
                        className="flex items-center justify-center md:ml-[0] ml-[2px] sm:ml-[0] text-center"
                        rightIcon={
                          <Img
                            src="images/img_arrowdown.svg"
                            className="ml-[5px] text-center"
                            alt="arrow_down"
                          />
                        }
                        shape="CircleBorder12"
                        size="sm"
                        variant="OutlineBluegray100"
                      >
                        <div className="bg-transparent cursor-pointer font-semibold leading-[normal] text-[11px] text-gray_500 text-left tracking-ls055 md:tracking-ls1 sm:tracking-ls1">
                          Ventas
                        </div>
                      </Button>
                      <div className="flex flex-row gap-[26px] items-center justify-end md:ml-[0] sm:ml-[0] ml-[354px] md:mt-[0] sm:mt-[0] mt-[5px] w-[auto]">
                        <Text
                          className="font-bold text-bluegray_101 text-left w-[auto]"
                          variant="body5"
                        >
                          Dia
                        </Text>
                        <Text
                          className="font-bold text-blue_A700 text-left w-[auto]"
                          variant="body5"
                        >
                          Semana
                        </Text>
                        <Text
                          className="font-bold text-bluegray_101 text-left w-[auto]"
                          variant="body5"
                        >
                          Mes
                        </Text>
                        <Text
                          className="font-bold text-bluegray_101 text-left w-[auto]"
                          variant="body5"
                        >
                          Año
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col font-roboto items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                      <div className="flex flex-col items-end justify-start w-[100%]">
                        <div className="flex md:flex-col sm:flex-col flex-row gap-[6px] items-center justify-between w-[100%]">
                          <div className="flex flex-col gap-[43px] h-[272px] md:h-[auto] sm:h-[auto] items-end justify-between w-[auto]">
                            <Text
                              className="font-bold text-bluegray_204 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                              variant="body3"
                            >
                              $100k
                            </Text>
                            <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                              <Text
                                className="font-bold text-bluegray_204 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                                variant="body3"
                              >
                                $70k
                              </Text>
                              <Text
                                className="font-bold mt-[52px] text-bluegray_204 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                                variant="body3"
                              >
                                $50k
                              </Text>
                              <Text
                                className="font-bold mt-[52px] text-bluegray_204 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                                variant="body3"
                              >
                                $20k
                              </Text>
                              <Text
                                className="font-bold md:ml-[0] sm:ml-[0] ml-[21px] mt-[52px] text-bluegray_204 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                                variant="body3"
                              >
                                0
                              </Text>
                            </div>
                          </div>
                          <div className="font-spartan h-[260px] md:h-[auto] sm:h-[auto] relative md:w-[100%] sm:w-[100%] w-[auto]">
                            <div className="h-[260px] md:h-[auto] sm:h-[auto] m-[auto] w-[100%]">
                              <Img
                                src="images/img_graph.svg"
                                className="absolute h-[260px] inset-[0] justify-center m-[auto] w-[auto]"
                                alt="Graph"
                              />
                              <Img
                                src="images/img_line.svg"
                                className="absolute h-[254px] inset-y-[0] my-[auto] right-[11%] w-[auto]"
                                alt="Line One"
                              />
                            </div>
                            <Text
                              className="absolute bg-indigo_400 justify-center p-[5px] right-[3%] rounded-bl-[0] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] text-left text-white_A700 top-[14%] w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              $70.000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row sm:gap-[40px] items-end justify-between max-w-[686px] ml-[auto] mt-[2px] w-[100%]">
                          <Text
                            className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                            variant="body5"
                          >
                            Mon
                          </Text>
                          <Text
                            className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                            variant="body5"
                          >
                            Tue
                          </Text>
                          <Text
                            className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                            variant="body5"
                          >
                            Wed
                          </Text>
                          <Text
                            className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                            variant="body5"
                          >
                            Thu
                          </Text>
                          <Text
                            className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                            variant="body5"
                          >
                            Fri
                          </Text>
                          <Text
                            className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                            variant="body5"
                          >
                            Sat
                          </Text>
                          <Text
                            className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                            variant="body5"
                          >
                            Sun
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-end p-[17px] rounded-radius17 shadow-bs md:w-[100%] sm:w-[100%] w-[auto]">
                  <div className="flex flex-col items-center justify-start mb-[2px] mt-[11px] w-[100%]">
                    <div className="flex flex-row gap-[35px] items-start justify-between w-[100%]">
                      <Text
                        className="text-black_900 text-left tracking-ls09 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Visitas
                      </Text>
                      <div className="flex flex-row gap-[26px] items-center justify-end mt-[4px] w-[auto]">
                        <Text
                          className="font-bold text-bluegray_101 text-left w-[auto]"
                          variant="body5"
                        >
                          D
                        </Text>
                        <Text
                          className="font-bold text-blue_A700 text-left w-[auto]"
                          variant="body5"
                        >
                          W
                        </Text>
                        <Text
                          className="font-bold text-bluegray_101 text-left w-[auto]"
                          variant="body5"
                        >
                          M
                        </Text>
                        <Text
                          className="font-bold text-bluegray_101 text-left w-[auto]"
                          variant="body5"
                        >
                          Y
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_frame6.svg"
                      className="h-[240px] mt-[56px] w-[214px]"
                      alt="FrameSix"
                    />
                    <div className="flex flex-row font-roboto gap-[25px] items-start justify-between mt-[14px] w-[204px]">
                      <Text
                        className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body5"
                      >
                        M
                      </Text>
                      <Text
                        className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body5"
                      >
                        T
                      </Text>
                      <Text
                        className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body5"
                      >
                        W
                      </Text>
                      <Text
                        className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body5"
                      >
                        T
                      </Text>
                      <Text
                        className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body5"
                      >
                        F
                      </Text>
                      <Text
                        className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body5"
                      >
                        S
                      </Text>
                      <Text
                        className="font-medium text-gray_700 text-left tracking-ls04000000059604645 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                        variant="body5"
                      >
                        S
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start mt-[36px] w-[100%]">
                <div className="flex flex-col gap-[11px] items-center justify-start w-[100%]">
                  <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="mt-[2px] text-black_900 text-left tracking-ls032 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Ordenes Recientes
                    </Text>
                    <div className="flex flex-row gap-[7px] items-end justify-between w-[auto]">
                      <Text
                        className="font-semibold my-[4px] text-bluegray_205 text-left tracking-ls024 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                        variant="body3"
                      >
                        Ir a paguina de ordenes
                      </Text>
                      <Img
                        src="images/img_arrowright.svg"
                        className="h-[24px] w-[24px]"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                  <div className="bg-white_A700 flex flex-col font-roboto gap-[20px] items-center justify-center p-[24px] sm:px-[20px] rounded-radius17 shadow-bs w-[100%]">
                    <div className="bg-gray_51 flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start mt-[8px] p-[11px] rounded-radius4 w-[100%]">
                      <Text
                        className="sm:ml-[0] ml-[26px] text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Item Name
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[194px] text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Qty
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[146px] text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Order Date
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[152px] text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Amount
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[146px] text-gray_501 text-left w-[auto]"
                        variant="body2"
                      >
                        Status
                      </Text>
                    </div>
                    <List
                      className="flex-col gap-[25px] grid items-center mb-[38px] md:w-[100%] sm:w-[100%] w-[91%]"
                      orientation="vertical"
                    >
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-row font-roboto gap-[13px] items-center justify-start md:w-[100%] sm:w-[100%] w-[14%]">
                          <Img
                            src="images/img_ellipse5_1.png"
                            className="h-[37px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[37px]"
                            alt="EllipseFive"
                          />
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Lector Mio
                          </Text>
                        </div>
                        <Text
                          className="font-bold font-roboto md:ml-[0] sm:ml-[0] ml-[140px] text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          1
                        </Text>
                        <Text
                          className="font-medium font-roboto md:ml-[0] sm:ml-[0] ml-[159px] text-bluegray_302 text-left w-[auto]"
                          variant="body1"
                        >
                          January 20, 2023
                        </Text>
                        <Text
                          className="font-bold font-roboto md:ml-[0] sm:ml-[0] ml-[102px] text-gray_801 text-left w-[auto]"
                          variant="body1"
                        >
                          $1000.00
                        </Text>
                        <Button
                          className="cursor-pointer font-bold font-spartan leading-[normal] min-w-[73px] md:ml-[0] sm:ml-[0] ml-[137px] md:mt-[0] sm:mt-[0] my-[8px] text-[9px] text-blue_A700 text-center tracking-ls027 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          size="md"
                          variant="FillBlue52"
                        >
                          Pendiente
                        </Button>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-row font-roboto gap-[13px] items-center justify-start md:w-[100%] sm:w-[100%] w-[14%]">
                          <Img
                            src="images/img_ellipse5_1.png"
                            className="h-[37px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[37px]"
                            alt="EllipseFive One"
                          />
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Lector Mio
                          </Text>
                        </div>
                        <Text
                          className="font-bold font-roboto md:ml-[0] sm:ml-[0] ml-[140px] text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          1
                        </Text>
                        <Text
                          className="font-medium font-roboto md:ml-[0] sm:ml-[0] ml-[159px] text-bluegray_302 text-left w-[auto]"
                          variant="body1"
                        >
                          January 20, 2023
                        </Text>
                        <Text
                          className="font-bold font-roboto md:ml-[0] sm:ml-[0] ml-[102px] text-gray_801 text-left w-[auto]"
                          variant="body1"
                        >
                          $1000.00
                        </Text>
                        <Button
                          className="cursor-pointer font-bold font-spartan leading-[normal] min-w-[73px] md:ml-[0] sm:ml-[0] ml-[137px] md:mt-[0] sm:mt-[0] my-[8px] text-[9px] text-center text-green_300 tracking-ls027 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          size="md"
                          variant="FillGreen51"
                        >
                          Aprobado
                        </Button>
                      </div>
                      <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-center justify-start w-[100%]">
                        <div className="flex md:flex-1 sm:flex-1 flex-row font-roboto gap-[13px] items-center justify-start md:w-[100%] sm:w-[100%] w-[14%]">
                          <div className="bg-gray_402 h-[37px] rounded-radius18 w-[37px]"></div>
                          <Text
                            className="font-bold text-black_900 text-left w-[auto]"
                            variant="body1"
                          >
                            Lector Mio
                          </Text>
                        </div>
                        <Text
                          className="font-bold font-roboto md:ml-[0] sm:ml-[0] ml-[140px] text-black_900 text-left w-[auto]"
                          variant="body1"
                        >
                          1
                        </Text>
                        <Text
                          className="font-medium font-roboto md:ml-[0] sm:ml-[0] ml-[159px] text-bluegray_302 text-left w-[auto]"
                          variant="body1"
                        >
                          January 20, 2022
                        </Text>
                        <Text
                          className="font-bold font-roboto md:ml-[0] sm:ml-[0] ml-[102px] text-gray_801 text-left w-[auto]"
                          variant="body1"
                        >
                          $1000.00
                        </Text>
                        <Button
                          className="cursor-pointer font-bold font-spartan leading-[normal] min-w-[73px] md:ml-[0] sm:ml-[0] ml-[137px] md:mt-[0] sm:mt-[0] my-[8px] text-[9px] text-center text-deep_orange_A100 tracking-ls027 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
                          size="md"
                          variant="FillOrange50"
                        >
                          En Proceso
                        </Button>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDesignPage;
