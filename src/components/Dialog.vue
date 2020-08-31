<template>
  <v-row justify="center">
    <v-dialog v-model="$store.state.dialog" :width="$vuetify.breakpoint.smAndDown ? '75%' : '50%'">
      <v-card>
        <v-img class="text-right" v-if="$store.state.dialogItem.img" :src="$store.state.dialogItem.img" height="100px">
          <v-btn class="ma-3" icon dark @click="dialog = true">
            <v-icon :color="img ? $store.state.color : null">mdi-image-plus</v-icon>
          </v-btn>
        </v-img>
        <v-sheet v-else class="text-right" :color="$store.state.color" height="100px">
          <v-btn class="ma-3" icon dark @click="dialog = true">
            <v-icon :color="$store.state.dialogItem.img ? $store.state.color : null">mdi-image-plus</v-icon>
          </v-btn>
        </v-sheet>
        <v-card-text>
          <v-container>
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-row>
                <v-col cols="12" sm="7" md="8">
                  <v-text-field
                    v-model="$store.state.dialogItem.title"
                    label="표제"
                    :color="$store.state.color"
                    clearable
                    required
                    :rules="[v => !!v || 'Title is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="5" md="4">
                  <v-text-field
                    v-model="$store.state.dialogItem.name"
                    label="담당자"
                    :color="$store.state.color"
                    clearable
                    required
                    :rules="[v => !!v || 'Name is required']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="$store.state.dialogItem.description"
                    label="설명"
                    :color="$store.state.color"
                    clearable
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :color="$store.state.color"
            text
            @click="reset(), $store.state.dialog = false, $store.state.dialogItem.img = null"
          >취소</v-btn>
          <v-btn :disabled="!valid" :color="$store.state.color" dark @click="validate()">추가</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog" :width="$vuetify.breakpoint.smAndDown ? '90%' : '75%'">
      <v-card>
        <v-tabs :color="$store.state.color" vertical>
          <v-tab>URL</v-tab>
          <v-tab>General</v-tab>
          <v-tab>English & History</v-tab>
          <v-tab>Math & Science</v-tab>
          <v-tab>Arts</v-tab>
          <v-tab>Sports</v-tab>
          <v-tab>Other</v-tab>
          <v-tab-item>
            <v-col cols="12">
              <v-text-field v-model="$store.state.dialogItem.img" label="URL" :color="$store.state.color" clearable></v-text-field>
            </v-col>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                v-for="url in general"
                :key="url"
                :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 4 : 3"
              >
                <v-card dark @click="$store.state.dialogItem.img = url, dialog = false">
                  <v-img :src="url" height="100px"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                v-for="url in englishAndHistory"
                :key="url"
                :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 4 : 3"
              >
                <v-card dark @click="$store.state.dialogItem.img = url, dialog = false">
                  <v-img :src="url" height="100px"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                v-for="url in mathAndScience"
                :key="url"
                :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 4 : 3"
              >
                <v-card dark @click="$store.state.dialogItem.img = url, dialog = false">
                  <v-img :src="url" height="100px"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                v-for="url in arts"
                :key="url"
                :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 4 : 3"
              >
                <v-card dark @click="$store.state.dialogItem.img = url, dialog = false">
                  <v-img :src="url" height="100px"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                v-for="url in sports"
                :key="url"
                :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 4 : 3"
              >
                <v-card dark @click="$store.state.dialogItem.img = url, dialog = false">
                  <v-img :src="url" height="100px"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item>
            <v-row>
              <v-col
                v-for="url in other"
                :key="url"
                :cols="$vuetify.breakpoint.xsOnly ? 12 : $vuetify.breakpoint.mdAndDown ? 4 : 3"
              >
                <v-card dark @click="$store.state.dialogItem.img = url, dialog = false">
                  <v-img :src="url" height="100px"></v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    dialog: false,
    valid: true,
    lazy: false,
    general: [
      "https://lh3.googleusercontent.com/IsoNa2rfYjziOtdARnjmBR08J2gb4nhbV6f_sIlz9PY5Ub6bfnRv5RCOYzgJsBUOkBWTKU73mcBA=w808-h278-p",
      "https://lh3.googleusercontent.com/gJKFJqZk6U6NSN6bZRYVHn4VdgFhRthoeewhQahQjy1Qm0WEGTKfuJLMnV9dJp0ypnndkv_N0IM_=w808-h278-p",
      "https://lh3.googleusercontent.com/MIawNdLucf-mcojNOpRe4juHRfjRG7sYbBqvf8RQwtsxCH7uX075DH5QXSJsNxQAHJkzvsOy0yoI=w808-h278-p",
      "https://lh3.googleusercontent.com/w-ikCo0P2hTtVJCfEhkyNZKkCZQc5uirT2xb8JJafe916-fNuuGJsoN-TYj1SzW_9nPmSFI-8vo4=w808-h278-p",
      "https://lh3.googleusercontent.com/Y2MgzmpsyjRF-K1bYxOI7GGiOJE6s79qHuxirOsEecNJWETJbhv1EKTGscvvMRgX1jWOomiya1Hh=w808-h278-p",
      "https://lh3.googleusercontent.com/V8zYSN-6mnXgp9ujZMY0bUE2eD6jxxOBUNhTsT-o5RH5io0nnf7KlMl9HVOBavcmOe8oSA8F8HXJ=w808-h278-p",
      "https://lh3.googleusercontent.com/DXpJleMtN5bEuyNCMGzpOByCT6GeoREK4hWdGm3RTb7SPSqKaXKT4_fI6-QjIB7h6u4GnJasxjeE=w808-h278-p",
      "https://lh3.googleusercontent.com/O12QuhJebMRbQi3lzQwzzPlLnMjuI-MI8r90F9JlYIXuAXJDzC66h7Fa0C3gcWKxOq4bRtOxmWMS=w808-h278-p",
      "https://lh3.googleusercontent.com/g0phbLkhmEmcwPdNhAuID3QjZEMZfSWNtqGuANTSU2pM6u7awGQA70-npa6cg-IevW5o26iPUlk1=w772-h266-p",
    ],
    englishAndHistory: [
      "https://lh3.googleusercontent.com/2xV-SkFv0JrYFzquG1Ic9_InOt7k01IWlp6dv46wOMJA0XE40XyPSMkNcK5ae0nhZ3x1vkneoChH=w808-h278-p",
      "https://lh3.googleusercontent.com/HN4wpem6w3sIGyGQjAvJh8o_oDVOy3ClNHayxD0K3YnxmGGUBohXgp3BkOYf7n8A9OsokZD0lKqC=w808-h278-p",
      "https://lh3.googleusercontent.com/cR2tLZIN57YazLskXMpHpiagKZnbfHbCGvqSdREVdak4Qfrj0ezYiARFyiW04pRbQnfBrMHfz9VO=w808-h278-p",
      "https://lh3.googleusercontent.com/DA1hvbe6TO7lyY8aw88VMDWpOM0UL1VFo47MuHTIBZEN31x8FNIdopBx-VtnHoWOAxttOchd-q0O=w808-h278-p",
      "https://lh3.googleusercontent.com/yFWDeRBE4bOwsdP4NkVjuJVf8yvG9NfgmElGoeYP4X1bssx2-PDplTvDfKYNAqJpOp77B9_w1RuP=w808-h278-p",
      "https://lh3.googleusercontent.com/JrmQQta5IWDmqiHkm-5Y9eY652ZK9WOHLI3NtHoy67x_TC_rX-u0Lt6e6FgcJbELbODf-XKnQLSj=w808-h278-p",
      "https://lh3.googleusercontent.com/NSv5rAMIaSQT2FgaBjOwjYm5kb3H2fOmWz0jyruLfht0XGce_ok6yVAcQvwoP15LV75W2WAuC2wx=w808-h278-p",
      "https://lh3.googleusercontent.com/n5gaPmerstUHaGb83JdPmMtUEBQ2Yw_o4R3TTXDkgl76RnrOdxLEOfEG2BeUxAtjia8MDceLQavA=w808-h278-p",
    ],
    mathAndScience: [
      "https://lh3.googleusercontent.com/GAZOVUHyqeM2Ud77l6S6IZKu4foO17HEoXGEJkS-tfVbnzsIlCzXHTz1WzZI2GpWoc_vfJl46Ohh=w808-h278-p",
      "https://lh3.googleusercontent.com/rfaZQQqdEFP0LJJCZw1109e8E-C_uJpzLe2vRNBuBH7Yi7zJ7Mp62RpR0hT1El14ydGRyQZnWOpc=w808-h278-p",
      "https://lh3.googleusercontent.com/Dif2BhRSITcLPz9LUgKPbdCr4ki4JtqXLSQC7aQ3f4z8cc5Qdjn2oRq5tM9JAkFaZocNlx6QU-sQ=w808-h278-p",
      "https://lh3.googleusercontent.com/Gp6HbZf_8xPI4bhKvMikwbJ2DrJCF-ooY7M55ldDKO7qIJLOcZgXYa-TEpBSRrrfbLQY7tlK7ReE=w808-h278-p",
      "https://lh3.googleusercontent.com/aeO9kOTMbhDOobef-jXk-WtcKCWCVm0Q4AzjnmGknoBe_skXpDeJ12XnvO7QKOF6yjg_1SUxRBnY=w808-h278-p",
      "https://lh3.googleusercontent.com/1E6peiL1sIldfaoxF961SPMPdzlNmD4Csl8LM1wOQrRjPGxf4K-D1y95750_rf5KN-Ec17XwqXpz=w808-h278-p",
    ],
    arts: [
      "https://lh3.googleusercontent.com/bjsifT0bgLV5ftYGCzG1ZRZNDetT_lIV-yHbUzVm8Ou894cS55ZvdPFBtV8MHyBMK4OXKDeZGIr6=w808-h278-p",
      "https://lh3.googleusercontent.com/VM8IBd6xqtAT3zspupUrJaBcOwWpabatZ1Eo_9LeuAVTf1nHQq3iVcj0Rjk9jJlrJh4XfYBXj0o6=w808-h278-p",
      "https://lh3.googleusercontent.com/OHqBcUA77NPMJtXb15bWqRf3U5EbZxj2PEwpnHh4BWkk0f7vDnTv3evFlpXS6XPoV6JB7-CA1xOg=w808-h278-p",
      "https://lh3.googleusercontent.com/EeiLZllA5R_snPcxbzKpeMyrtBzGErUkN6xKONtj1CeYcamO4fXtiOc1x20kE2Zs0r9Z4jl9faA7=w808-h278-p",
      "https://lh3.googleusercontent.com/tp5CK337uJlnJyR4C-3GcrmPEPqL5KLSPrJzurk8FYm6rd24Zmgah8SZeOwgEBtjSTQypaksZD8W=w808-h278-p",
      "https://lh3.googleusercontent.com/yBglews6KiIqxMJ0zcbAaASHjS8HsVwYzqdGTfNJjLjTIn2F6lNubs5oC-r_MOyMszsKF_kLaymJ=w808-h278-p",
      "https://lh3.googleusercontent.com/WoO1DAtTTUSOWz50rVbtiUf1j4TF4KwSY_PX5w4K88JkxLYhBfpYIVzuzQXFsLtwWmxtvRxIT7Ix=w808-h278-p",
      "https://lh3.googleusercontent.com/aEc1HHPYxOs0SPPNzI40SwewbRg7CIup7jui9g6cUgam4_36FJ8JDcJ8lNd-K5WcUncgOJk9l-yd=w808-h278-p",
      "https://lh3.googleusercontent.com/50V8CSoQ2HugZLO8WY2WzFsBV6mrmL5e9c-bQA7zBsiIP9L8yvck4ghYY8yfg4lyde7mz_w9tWYT=w808-h278-p",
      "https://lh3.googleusercontent.com/ccJZMep6SxnC45as3BQFpkJXuwSgMYBtQ6vt-DypuA1L2pWrv6i5PQB1IUNLZXyWI2v_GSRvErAs=w808-h278-p",
      "https://lh3.googleusercontent.com/xWsTPviPoFIUdJ5CvlmFdlb_JKkk4wuq-nncePXxK1PW74_xbk9KYFXjwnBdZ-jU-yQKLqczyK0_=w808-h278-p",
      "https://lh3.googleusercontent.com/N_5urAdXThwuLlZh_m1L99qRfe7q0ilhBJajsL1iOQi8EXFodSCee2H9rqG35nWQuRcbJOlgljCd=w808-h278-p",
      "https://lh3.googleusercontent.com/6uwE6JWBOuHSWhabuV5FZGBHNtErKHvhdr33hk3e9VlY94d8bNbzXPI5ryv51BAPMojYcGDOenRU=w772-h266-p",
    ],
    sports: [
      "https://lh3.googleusercontent.com/KRcOz8Fy2RaQBAWkQurH-uLC5JCE6X-mrm5Sbaup3homG_Nwjwm1uk4cOHc317lSWCGJltxwWxrx=w808-h278-p",
      "https://lh3.googleusercontent.com/MJowl1X_wgR88E-li-TcIP7Zd-oy4RDBH_fRnekhco_zfmOGcYznIb_o30ySZxSHksj44MjqABcD=w808-h278-p",
      "https://lh3.googleusercontent.com/fK6TQDdgF2C2AXHJaxQV3NfNZIkHo77aQf0sHbf4ZmZfQebsMwv6ThT25x3cY97GIQwLjxELQnVB=w808-h278-p",
      "https://lh3.googleusercontent.com/Mcdr0UlOnkO3d9YESs6jVt0Yo0sqPIzHVWoflmOM2DAyhgbM1mVjC1mKt_lIT1nQPOnsT2pdKNvH=w808-h278-p",
      "https://lh3.googleusercontent.com/igtL210WdndtjFBDC0fY40pSRla8Z5W_ao56JJ5RcludMWNzCWun0qyuLJ7LgjwC25dm46xIHINs=w808-h278-p",
      "https://lh3.googleusercontent.com/WqGOkZ2c85TGNzG00FFP_C5nLEq3MWHg1plATuK2gMBL5Pp8EqfHuy3590HRRW3v0jZ8FWScCT2z=w808-h278-p",
      "https://lh3.googleusercontent.com/WXpMSvHOpHV20-IapXuvP52etHye1HSNgzBLgAVOG0_oerZufrLI1D-FxcmmCi5Q4q92KHeAgQWg=w808-h278-p",
      "https://lh3.googleusercontent.com/cQBIR2NLy4v3nD2zlZh_CqSp7t9E4DVmV1NWzyWGhL8qPjD3hcHNvuuan2sIvLAkn4DCuZBKMVnH=w808-h278-p",
      "https://lh3.googleusercontent.com/oPbOxGopJXEX5Ak0sVyum1Sm8Y3AJyX9Il0EoKs18r18H-_pQoL9Go5C_x4VHDS4Sj8BJa-gSW0a=w808-h278-p",
      "https://lh3.googleusercontent.com/JQ4cdWMumGa-uikWUJPWnOz8t_ar_Dme2eCPW7PLq5-37kPwAu0EEUMtgE-SZEGKSSF5zmyu6Whh=w808-h278-p",
      "https://lh3.googleusercontent.com/fQl6VdvDHRvElTcdav_uYogXulQZ5KYZkDNHcBATLZkOzxl3E3kOMD0naoyZes6JygUhLvk5N4fW=w808-h278-p",
      "https://lh3.googleusercontent.com/ICDL9iyXN8MnI5Os4RzdOQjh4w-P6INmFjVxVpNe1UElBAco_oTf7Pz5yXGbPstBfy9xkqpbtXvT=w808-h278-p",
      "https://lh3.googleusercontent.com/dfZ84xtu9250ilNcEvnuq88gUZp3LmbjrcfMVJO6mfKUBGJ5Ph94yYI7jui4Iq12LeVxNt_KhPLA=w808-h278-p",
      "https://lh3.googleusercontent.com/HEx0zegch0Lzsy_ZrDNdkRu9OffLpjIfkEr79aIV73QaIdwTNjoc2ZEVH-6x7bpBkzaIHHe6WaXN=w808-h278-p",
      "https://lh3.googleusercontent.com/zrsgJ37AUgH1P0NZPIQVFkygdRFsn7qD2YZIuP9yRNscoMHAObLeq3BevSYErVi0jKHuSDlhOTj8=w808-h278-p",
      "https://lh3.googleusercontent.com/1IGvKtVYR_YgwlERzt2YYvcxfqPdsWgcLkOMQDjvrwUn2MeaNLL-1h3cLXjadrjrb1Qb1x12Ihbk=w808-h278-p",
      "https://lh3.googleusercontent.com/-YDAecFuxl1nPPvfeX1790Yao8F6Ds3nJsisWdia5bz2m3bvr10ZfOfKUNsDdD1B_pV-FXpz0crE=w808-h278-p",
      "https://lh3.googleusercontent.com/n3YpOFX41C_SqEg3FJjzTz59x7NdKEMP0xNs3X9XpAFgFq6AaDKYZHYiNRNqUCR938ruHbb0A_8b=w808-h278-p",
      "https://lh3.googleusercontent.com/bcDNUFTnfI0wlbaD4JZEgmLrRD3mQ2UKgIDOmM3FTqyANDOnwY30csmpRV3tl41gmF9PPcgrNjE8=w808-h278-p",
      "https://lh3.googleusercontent.com/522oEu3bwpx0TKMJza6UnTjiiDEYGBjt6XvtzKfUAJtZGGqu843GZZmZu9k63ALNgGIOytlod5WN=w808-h278-p",
      "https://lh3.googleusercontent.com/-4QMlSMe0L6-W_T0nr8H3mhDB4qmeUw6UNxBs53EUiL4EoDxQeYR1r3MAguzOExacQUrtG6fjGzO=w808-h278-p",
      "https://lh3.googleusercontent.com/xeo4Li81CEj9T4-60sj5MeGGLixwsPDuoSKQSIGnWjMX7Fhnf2wFzV3ClTBHsttcIfJRbpHn1crh=w808-h278-p",
      "https://lh3.googleusercontent.com/JzozdF_1w0vUCI7QSY1jatej2-nV8g3K4CiD4om8t5ObwDkLqrJGZKlW1SaqARhNjJCwrs9R2Mnt=w808-h278-p",
      "https://lh3.googleusercontent.com/W4UTelq0U2zQX3sge5qsX5NOWm9_4aaZSMxa81AOYBjQzDIj4lhTKfqi07ik7nM-vLvcah65qPid=w808-h278-p",
    ],
    other: [
      "https://lh3.googleusercontent.com/oB_-nkoDrkVFfNDrtxlwMtx-irYG7tF9OjkOFDUMyAksM24gTXmZ1OCUep8JhPpL2dLP-ztBOC44=w808-h278-p",
      "https://lh3.googleusercontent.com/huNoL9mrcY94QpT8Cs5hjV9W8myWob-t58zyz5yNGL5jpKZgqjyFfikS2hX4CiOk8O8eFseYOsdc=w808-h278-p",
      "https://lh3.googleusercontent.com/hgR_vN46zGWDhTd1j9zbmCFdXty6VONuNcBqbh_vO9Ci2RuBGJVxQkO2d3Zbz9LRuup0WeHggzGv=w808-h278-p",
      "https://lh3.googleusercontent.com/ORvZl8--iMsypdAU7E88eqUCVkX3UjSfUWjsjJB7oD_404Ck-04zQW-CggzrB84JirmVrCIgnx4K=w808-h278-p",
      "https://lh3.googleusercontent.com/LJxI3LshVcrpi6L8w8KkHC5adYUt8i4uCDwKTJkbSVAVMs47DO0o_dUMrHzlAunH00kQmo25d-ra=w808-h278-p",
      "https://lh3.googleusercontent.com/ltIjrEFeyeqQhzdjRLvVkIsWNzPMmTFx2PXupQfoAhTVVbmdInPmYeKPmfEYs-4V8WATFY_PJSSK=w808-h278-p",
      "https://lh3.googleusercontent.com/rqr8MTTS1JYr_Rv3YPbVQrikQO9EJcwTX2A2syauo_BFggXcBiGDvwyhc6yydiHNPmtWMmEz-SLO=w808-h278-p",
      "https://lh3.googleusercontent.com/uGnqeo5mTYMpuB27USWHs9QF1UfuGNe8MAIlFZIDjyIXooLDTojWE5OODnoYQ9PCXGM-SgJMa_El=w808-h278-p",
      "https://lh3.googleusercontent.com/ctYuNhiCYzAz0ucXXNOepnReXjW1rbMlp4MP2eXgCA7gjxtjjSidNnVr8iwDwnVo7PbK3H2G8gvi=w808-h278-p",
      "https://lh3.googleusercontent.com/z_OTBgKw8o3UFtM2CwvL-1yHOUide7fzftyeFBOucfHKjuQD6pxrLfwgUrc4K0E940Q9jXC39zUX=w808-h278-p",
      "https://lh3.googleusercontent.com/4Hzo-m3pQLCbuHXJ2N-h1JGkGg-jV5y2sPZkC7O8YZ6ESg5PeIITe7CKQeRuLEPbXi-alM-HTAAC=w808-h278-p",
      "https://lh3.googleusercontent.com/R8n97fnMr0oIzh6gf0Z4MrYyypqC-MsctTRRWxwUF-HDaveumDN8CbvEFTQQLtpWPXgbi68EjRh3=w808-h278-p",
      "https://lh3.googleusercontent.com/3Ql17RU0BXU5Yk8x_N5BfIhrk-d_6kYS8AcqmgWm9CmDEEBrZ2XfKjQmQBv40Z-3pPmOFDLZri8r=w772-h266-p",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      this.axios();
    },
    reset() {
      this.$refs.form.reset();
    },
    axios: function () {
      axios
        .post(
          "//" +
            this.$store.state.server +
            (this.$store.state.group ? "/node" : "/group"),
          {
            img: this.$store.state.dialogItem.img,
            title: this.$store.state.dialogItem.title,
            description: this.$store.state.dialogItem.description,
            name: this.$store.state.dialogItem.name,
            group: this.$store.state.group,
          }
        )
        .then((res) => {
          if (this.$store.state.group)
            this.$store.state.nodeItems.push(res.data);
          else this.$store.state.groupItems.push(res.data);
          this.$store.state.dialog = false;
          this.$store.state.dialogItem.img = null;
          this.reset();
        });
    },
  },
};
</script>
