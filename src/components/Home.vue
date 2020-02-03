<template>
  <v-app id="inspire">
    <v-content class="bgimgH">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-row v-if="wilks2 != null" align="center" justify="center">
              <p style="text-align: center; font-size: 64px; color: white; padding: 20px">{{wilks2}}</p>
            </v-row>
            <v-card class="elevation-12">
              <v-toolbar color="black" dark flat>
                <v-spacer />
                <v-toolbar-title>Wilks v2 Calculator</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text style="padding: 10px 60px 10px 50px">
                <v-form>
                  <v-col cols="12" style="padding: 0px">
                    <v-row align="center" justify="center" style="padding: 0px">
                      <v-col justify="center" style="padding: 0px" sm="6">
                        <div class="flex-center">
                          <v-radio-group v-model="sex" column align="center">
                            <v-radio color="black" label="Male" value="male"></v-radio>
                            <v-radio color="black" label="Female" value="female"></v-radio>
                          </v-radio-group>
                        </div>
                      </v-col>
                      <v-col justify="center" style="padding: 0px" sm="6">
                        <div class="flex-center">
                          <v-radio-group v-model="units" column align="center">
                            <v-radio color="black" label="kg" value="kg"></v-radio>
                            <v-radio color="black" label="lbs" value="lbs"></v-radio>
                          </v-radio-group>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-text-field
                    :label="bwLabelUnits"
                    name="bodyweight"
                    prepend-icon="mdi-weight-gram"
                    type="number"
                    v-model="bodyweight"
                    autocomplete="off"
                  />
                  <v-text-field
                    id="total"
                    :label="totalLabelUnits"
                    prepend-icon="mdi-weight-lifter"
                    v-model="total"
                    type="number"
                    browser-autocomplete="new-password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  class="white--text"
                  @click="calculateWilks(sex,total,bodyweight,units)"
                  color="black"
                >Calculate</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
            <v-row style="padding-top: 20px">
              <p
                style="text-align: center; padding-top: 40px: margin: 10px 0px 0px 0px; color: white"
              >
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon color="white" v-on="on">mdi-information-outline</v-icon>
                  </template>
                  <span>
                    The old wilks coefficient is calculated by dividing 500 by a value calculated using your bodyweight (
                    <a
                      href="https://en.wikipedia.org/wiki/Wilks_Coefficient"
                    >see here</a>), the new formula has changed 500 to 600, this results in a largely different coefficient despite the formula not changing a large amount.
                  </span>
                </v-tooltip>the constant in the formula did not change from 500 to 600 your wilks would be:
              </p>
            </v-row>
            <v-row v-if="wilks2 != null" align="center" justify="center">
              <p
                style="text-align: center; font-size: 34px; color: black; padding: 5px; margin: 0px; color: white"
              >{{oldWilks2}}</p>
            </v-row>
            <v-row>
              <div style="width: 100%">
                <p
                  style="text-align: center; padding: 10px; margin: 0px; color: white"
                >Your old wilks score would be:</p>
              </div>
            </v-row>
            <v-row v-if="wilks2 != null" align="center" justify="center">
              <p
                style="text-align: center; font-size: 34px; color: black; padding: 5px; margin: 0px; color: white"
              >{{wilks}}</p>
            </v-row>
            <v-row>
              <div style="width: 100%">
                <p
                  style="text-align: center; padding: 15px; margin: 0px; color: white; width: 100%; font-size: 25px; min-height: 90px; line-height: 30px"
                >{{this.percentageChangeText}}</p>
              </div>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data() {
    return {
      sex: null,
      percentageChangeText: null,
      percentageChange: null,
      bodyweight: null,
      total: null,
      wilks2ceoff: null,
      units: null,
      bwLabelUnits: "Bodyweight",
      totalLabelUnits: "Total",
      M_A: -99.22855411,
      M_B: 14.40581421,
      M_C: -0.015415771,
      M_D: -0.000769734,
      M_E: 4.97549e-6,
      M_F: -9.35418e-9,
      W_A: -219.6791486,
      W_B: 19.55345493,
      W_C: -0.167792909,
      W_D: 0.000406937,
      W_E: 1.84095e-6,
      W_F: -8.31427e-9,
      wilks2: 0.0,
      oldWilks2: 0.0,
      wilks: 0.0,
      M_a: -216.0475144,
      M_b: 16.2606339,
      M_c: -0.002388645,
      M_d: -0.00113732,
      M_e: 7.01863e-6,
      M_f: -1.291e-8,
      W_a: 594.31747775582,
      W_b: -27.23842536447,
      W_c: 0.82112226871,
      W_d: -0.00930733913,
      W_e: 4.731582e-5,
      W_f: -9.054e-8
    };
  },
  methods: {
    calculateWilks: function(sex, total, bodyweight, units) {
      if (units == "lbs") {
        bodyweight = bodyweight / 2.20462;
        total = total / 2.20462;
      }

      if (sex == "male") {
        if (bodyweight > 200.95) {
          this.wilks2coeff = 0.6153;
        }

        if (bodyweight <= 200.95) {
          this.wilks2coeff =
            600 /
            (this.M_A +
              this.M_B * bodyweight +
              this.M_C * bodyweight ** 2 +
              this.M_D * bodyweight ** 3 +
              this.M_E * bodyweight ** 4 +
              this.M_F * bodyweight ** 5);
        }
        let wilks2coeffRounded = this.wilks2coeff.toFixed(4);
        this.wilks2 = total * wilks2coeffRounded;
        this.wilks2 = this.wilks2.toFixed(2);
        this.oldWilks2 = (this.wilks2 * 5) / 6;
        this.oldWilks2 = this.oldWilks2.toFixed(2);

        let wilksCoeff =
          500 /
          (this.M_a +
            this.M_b * bodyweight +
            this.M_c * bodyweight ** 2 +
            this.M_d * bodyweight ** 3 +
            this.M_e * bodyweight ** 4 +
            this.M_f * bodyweight ** 5);
        let wilksCoeffRounded = wilksCoeff.toFixed(4);
        this.wilks = total * wilksCoeffRounded;
        this.wilks = this.wilks.toFixed(2);
        this.percentageChange = (
          (this.oldWilks2 / this.wilks - 1) *
          100
        ).toFixed(2);
        let absValueChange = Math.abs(this.percentageChange);
        if (this.percentageChange > 0) {
          this.percentageChangeText =
            "This is a " +
            absValueChange +
            "% increase at your weight from the old formula";
        } else if (this.percentageChange < 0) {
          this.percentageChangeText =
            "This is a " +
            absValueChange +
            "% decrease at your weight from the old formula";
        } else if (this.percentageChange == 0) {
          this.percentageChangeText =
            "There is no change at your weight compared to the old formula";
        }
      }

      if (sex == "female") {
        if (bodyweight > 150.95) {
          this.wilks2coeff = 0.9796;
        }

        if (bodyweight <= 150.95) {
          this.wilks2coeff =
            600 /
            (this.W_A +
              this.W_B * bodyweight +
              this.W_C * bodyweight ** 2 +
              this.W_D * bodyweight ** 3 +
              this.W_E * bodyweight ** 4 +
              this.W_F * bodyweight ** 5);
        }
        let wilks2coeffRounded = this.wilks2coeff.toFixed(4);
        this.wilks2 = total * wilks2coeffRounded;
        this.wilks2 = this.wilks2.toFixed(2);
        this.oldWilks2 = (this.wilks2 * 5) / 6;
        this.oldWilks2 = this.oldWilks2.toFixed(2);

        let wilksCoeff =
          500 /
          (this.W_a +
            this.W_b * bodyweight +
            this.W_c * bodyweight ** 2 +
            this.W_d * bodyweight ** 3 +
            this.W_e * bodyweight ** 4 +
            this.W_f * bodyweight ** 5);
        let wilksCoeffRounded = wilksCoeff.toFixed(4);
        this.wilks = total * wilksCoeffRounded;
        this.wilks = this.wilks.toFixed(2);
        this.percentageChange = (
          (this.oldWilks2 / this.wilks - 1) *
          100
        ).toFixed(2);
        let absValueChange = Math.abs(this.percentageChange);
        if (this.percentageChange > 0) {
          this.percentageChangeText =
            "This is a " +
            absValueChange +
            "% increase at your weight from the old formula";
        } else if (this.percentageChange < 0) {
          this.percentageChangeText =
            "This is a " +
            absValueChange +
            "% decrease at your weight from the old formula";
        } else if (this.percentageChange == 0) {
          this.percentageChangeText =
            "There is no change at your weight compared to the old formula";
        }
      }
    }
  },
  watch: {
    units: function() {
      if (this.units == "lbs") {
        this.bwLabelUnits = "Bodyweight (lbs)";
        this.totalLabelUnits = "Total (lbs)";
      }
      if (this.units == "kg") {
        this.bwLabelUnits = "Bodyweight (kg)";
        this.totalLabelUnits = "Total (kg)";
      }
    }
  }
};
</script>

<style scoped>
.bgimgH {
  background-image: url("~@/assets/gradient.jpg");
  background-size: cover;
  background-position: center;
  height: 100%;
  line-height: 100%;
}

.flex-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>