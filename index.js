let country = document.querySelector("#country");

country.addEventListener("change", function () {
  let countryCode = document.querySelector("#country").value;

  if (countryCode) {
    document.querySelector("#phoneCode").textContent =
      "+ " + phoneCode(countryCode);
    document.querySelector("#plus").style.display = "none";
    country.classList.toggle("hidden");
  }
});

let triangle = document.querySelector("#containerTriangle");

triangle.addEventListener("click", toggleCountry);

let clickCount = 0;

function addClick() {
  clickCount++;
  if (clickCount > 1) {
    country.classList.add("hidden");
    clickable.removeEventListener("click", addClick);
    clickCount = 0;
  }
}

let clickable = document.querySelector("body");

function toggleCountry() {
  country.classList.remove("hidden");
  clickable.addEventListener("click", addClick);
}


function phoneCode(country_iso3) {
  if (country_iso3 == "AFG") return "93";
  if (country_iso3 == "ALB") return "355";
  if (country_iso3 == "DZA") return "213";
  if (country_iso3 == "ASM") return "1684";
  if (country_iso3 == "AND") return "376";
  if (country_iso3 == "AGO") return "244";
  if (country_iso3 == "AIA") return "1264";
  if (country_iso3 == "ATA") return "672";
  if (country_iso3 == "ATG") return "1268";
  if (country_iso3 == "ARG") return "54";
  if (country_iso3 == "ARM") return "374";
  if (country_iso3 == "ABW") return "297";
  if (country_iso3 == "AUS") return "61";
  if (country_iso3 == "AUT") return "43";
  if (country_iso3 == "AZE") return "994";
  if (country_iso3 == "BHS") return "1242";
  if (country_iso3 == "BHR") return "973";
  if (country_iso3 == "BGD") return "880";
  if (country_iso3 == "BRB") return "1246";
  if (country_iso3 == "BLR") return "375";
  if (country_iso3 == "BEL") return "32";
  if (country_iso3 == "BLZ") return "501";
  if (country_iso3 == "BEN") return "229";
  if (country_iso3 == "BMU") return "1441";
  if (country_iso3 == "BTN") return "975";
  if (country_iso3 == "BOL") return "591";
  if (country_iso3 == "BIH") return "387";
  if (country_iso3 == "BWA") return "267";
  if (country_iso3 == "BVT") return "_55";
  if (country_iso3 == "BRA") return "55";
  if (country_iso3 == "IOT") return "1284";
  if (country_iso3 == "BRN") return "673";
  if (country_iso3 == "BGR") return "359";
  if (country_iso3 == "BFA") return "226";
  if (country_iso3 == "BDI") return "257";
  if (country_iso3 == "KHM") return "855";
  if (country_iso3 == "CMR") return "237";
  if (country_iso3 == "CAN") return "1";
  if (country_iso3 == "CPV") return "238";
  if (country_iso3 == "CYM") return "1345";
  if (country_iso3 == "CAF") return "236";
  if (country_iso3 == "TCD") return "235";
  if (country_iso3 == "CHL") return "56";
  if (country_iso3 == "CHN") return "86";
  if (country_iso3 == "CXR") return "618";
  if (country_iso3 == "CCK") return "61";
  if (country_iso3 == "COL") return "57";
  if (country_iso3 == "COM") return "269";
  if (country_iso3 == "COG") return "242";
  if (country_iso3 == "COD") return "243";
  if (country_iso3 == "COK") return "682";
  if (country_iso3 == "CRI") return "506";
  if (country_iso3 == "HRV") return "385";
  if (country_iso3 == "CUB") return "53";
  if (country_iso3 == "CYP") return "357";
  if (country_iso3 == "CZE") return "420";
  if (country_iso3 == "DNK") return "45";
  if (country_iso3 == "DJI") return "253";
  if (country_iso3 == "DMA") return "1767";
  if (country_iso3 == "DOM") return "1";
  if (country_iso3 == "ECU") return "593";
  if (country_iso3 == "EGY") return "20";
  if (country_iso3 == "SLV") return "503";
  if (country_iso3 == "GNQ") return "240";
  if (country_iso3 == "ERI") return "291";
  if (country_iso3 == "EST") return "372";
  if (country_iso3 == "ETH") return "251";
  if (country_iso3 == "FLK") return "500";
  if (country_iso3 == "FRO") return "298";
  if (country_iso3 == "FJI") return "679";
  if (country_iso3 == "FIN") return "358";
  if (country_iso3 == "FRA") return "33";
  if (country_iso3 == "GUF") return "594";
  if (country_iso3 == "PYF") return "689";
  if (country_iso3 == "GAB") return "241";
  if (country_iso3 == "GMB") return "220";
  if (country_iso3 == "GEO") return "995";
  if (country_iso3 == "DEU") return "49";
  if (country_iso3 == "GHA") return "233";
  if (country_iso3 == "GIB") return "350";
  if (country_iso3 == "GRC") return "30";
  if (country_iso3 == "GRL") return "299";
  if (country_iso3 == "GRD") return "1473";
  if (country_iso3 == "GLP") return "590";
  if (country_iso3 == "GUM") return "1671";
  if (country_iso3 == "GTM") return "502";
  if (country_iso3 == "GIN") return "224";
  if (country_iso3 == "GNB") return "245";
  if (country_iso3 == "GUY") return "592";
  if (country_iso3 == "HTI") return "509";
  if (country_iso3 == "HMD") return "61";
  if (country_iso3 == "VAT") return "3";
  if (country_iso3 == "HND") return "504";
  if (country_iso3 == "HKG") return "852";
  if (country_iso3 == "HUN") return "36";
  if (country_iso3 == "ISL") return "354";
  if (country_iso3 == "IND") return "91";
  if (country_iso3 == "IDN") return "62";
  if (country_iso3 == "IRN") return "98";
  if (country_iso3 == "IRQ") return "964";
  if (country_iso3 == "IRL") return "353";
  if (country_iso3 == "ISR") return "972";
  if (country_iso3 == "ITA") return "39";
  if (country_iso3 == "CIV") return "225";
  if (country_iso3 == "JAM") return "1876";
  if (country_iso3 == "JPN") return "81";
  if (country_iso3 == "JOR") return "962";
  if (country_iso3 == "KAZ") return "7";
  if (country_iso3 == "KEN") return "254";
  if (country_iso3 == "KIR") return "686";
  if (country_iso3 == "PRK") return "850";
  if (country_iso3 == "KOR") return "82";
  if (country_iso3 == "KWT") return "965";
  if (country_iso3 == "KGZ") return "7";
  if (country_iso3 == "LAO") return "856";
  if (country_iso3 == "LVA") return "371";
  if (country_iso3 == "LBN") return "961";
  if (country_iso3 == "LSO") return "266";
  if (country_iso3 == "LBR") return "231";
  if (country_iso3 == "LBY") return "218";
  if (country_iso3 == "LIE") return "423";
  if (country_iso3 == "LTU") return "370";
  if (country_iso3 == "LUX") return "352";
  if (country_iso3 == "MAC") return "853";
  if (country_iso3 == "MKD") return "389";
  if (country_iso3 == "MDG") return "261";
  if (country_iso3 == "MWI") return "265";
  if (country_iso3 == "MYS") return "60";
  if (country_iso3 == "MDV") return "960";
  if (country_iso3 == "MLI") return "223";
  if (country_iso3 == "MLT") return "356";
  if (country_iso3 == "MHL") return "692";
  if (country_iso3 == "MTQ") return "596";
  if (country_iso3 == "MRT") return "222";
  if (country_iso3 == "MUS") return "230";
  if (country_iso3 == "MYT") return "262";
  if (country_iso3 == "MEX") return "52";
  if (country_iso3 == "FSM") return "691";
  if (country_iso3 == "MDA") return "373";
  if (country_iso3 == "MCO") return "377";
  if (country_iso3 == "MNG") return "976";
  if (country_iso3 == "MSR") return "1664";
  if (country_iso3 == "MAR") return "212";
  if (country_iso3 == "MOZ") return "258";
  if (country_iso3 == "MMR") return "95";
  if (country_iso3 == "NAM") return "264";
  if (country_iso3 == "NRU") return "674";
  if (country_iso3 == "NPL") return "977";
  if (country_iso3 == "NLD") return "31";
  if (country_iso3 == "ANT") return "599";
  if (country_iso3 == "NCL") return "687";
  if (country_iso3 == "NZL") return "64";
  if (country_iso3 == "NIC") return "505";
  if (country_iso3 == "NER") return "227";
  if (country_iso3 == "NGA") return "234";
  if (country_iso3 == "NIU") return "683";
  if (country_iso3 == "NFK") return "672";
  if (country_iso3 == "MNP") return "1670";
  if (country_iso3 == "NOR") return "47";
  if (country_iso3 == "OMN") return "968";
  if (country_iso3 == "PAK") return "92";
  if (country_iso3 == "PLW") return "680";
  if (country_iso3 == "PSE") return "970";
  if (country_iso3 == "PAN") return "507";
  if (country_iso3 == "PNG") return "675";
  if (country_iso3 == "PRY") return "595";
  if (country_iso3 == "PER") return "51";
  if (country_iso3 == "PHL") return "63";
  if (country_iso3 == "PCN") return "870";
  if (country_iso3 == "POL") return "48";
  if (country_iso3 == "PRT") return "351";
  if (country_iso3 == "PRI") return "1";
  if (country_iso3 == "QAT") return "974";
  if (country_iso3 == "REU") return "262";
  if (country_iso3 == "ROM") return "40";
  if (country_iso3 == "RUS") return "7";
  if (country_iso3 == "RWA") return "250";
  if (country_iso3 == "SHN") return "290";
  if (country_iso3 == "KNA") return "1869";
  if (country_iso3 == "LCA") return "1758";
  if (country_iso3 == "SPM") return "508";
  if (country_iso3 == "VCT") return "1758";
  if (country_iso3 == "WSM") return "685";
  if (country_iso3 == "SMR") return "378";
  if (country_iso3 == "STP") return "239";
  if (country_iso3 == "SAU") return "966";
  if (country_iso3 == "SEN") return "221";
  if (country_iso3 == "SRB") return "381";
  if (country_iso3 == "SYC") return "248";
  if (country_iso3 == "SLE") return "232";
  if (country_iso3 == "SGP") return "65";
  if (country_iso3 == "SVK") return "421";
  if (country_iso3 == "SVN") return "386";
  if (country_iso3 == "SLB") return "677";
  if (country_iso3 == "SOM") return "252";
  if (country_iso3 == "ZAF") return "27";
  if (country_iso3 == "SGS") return "44";
  if (country_iso3 == "ESP") return "34";
  if (country_iso3 == "LKA") return "94";
  if (country_iso3 == "SDN") return "249";
  if (country_iso3 == "SUR") return "597";
  if (country_iso3 == "SJM") return "47";
  if (country_iso3 == "SWZ") return "268";
  if (country_iso3 == "SWE") return "46";
  if (country_iso3 == "CHE") return "41";
  if (country_iso3 == "SYR") return "963";
  if (country_iso3 == "TWN") return "886";
  if (country_iso3 == "TJK") return "992";
  if (country_iso3 == "TZA") return "255";
  if (country_iso3 == "THA") return "66";
  if (country_iso3 == "TLS") return "670";
  if (country_iso3 == "TGO") return "228";
  if (country_iso3 == "TKL") return "690";
  if (country_iso3 == "TON") return "676";
  if (country_iso3 == "TTO") return "1868";
  if (country_iso3 == "TUN") return "216";
  if (country_iso3 == "TUR") return "90";
  if (country_iso3 == "TKM") return "993";
  if (country_iso3 == "TCA") return "1649";
  if (country_iso3 == "TUV") return "688";
  if (country_iso3 == "UGA") return "256";
  if (country_iso3 == "UKR") return "380";
  if (country_iso3 == "ARE") return "971";
  if (country_iso3 == "GBR") return "44";
  if (country_iso3 == "USA") return "1";
  if (country_iso3 == "UMI") return "1340";
  if (country_iso3 == "URY") return "598";
  if (country_iso3 == "UZB") return "998";
  if (country_iso3 == "VUT") return "678";
  if (country_iso3 == "VEN") return "58";
  if (country_iso3 == "VNM") return "84";
  if (country_iso3 == "VGB") return "1284";
  if (country_iso3 == "VIR") return "1340";
  if (country_iso3 == "WLF") return "681";
  if (country_iso3 == "YEM") return "260";
  if (country_iso3 == "ZMB") return "260";
  if (country_iso3 == "ZWE") return "263";
}
