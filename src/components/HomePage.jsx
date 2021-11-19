import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from 'react-bootstrap';

const HomePage = () => (
    <div class="container mt-3 pt-3 ml-2">
      <div class="container">
      <h4>Recently played</h4>
      <a
        href="#"
        class="seeAll"
        style={{
          'position': 'absolute',
          'top': '10px',
          'right': '24px',
          'color': 'rgb(156, 157, 158)',
          'font-size': 'smaller',
        }}
        ><p onclick="document.location='album.html'">SEE ALL</p></a
      >
      <div class="container">
        <div class="row row-cols-8">
          <div class="col" style={{'padding-left': '0px', 'padding-right': '0px'}}>
            <div
              class="card"
              style={{
                'width': '8rem',
                'height': '200px',
                'background-color': 'rgb(41, 40, 40)',
              }}
              onclick="document.location='album.html'"
            >
              <img
                src="/Home-page/recently played/1.png"
                class="card-img-top"
                style={{'position': 'absolute', 'width': '110px', 'top': '9px', 'left': '8px',}}
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  'position': 'absolute',
                  'top': '120px',
                  'left': '-10px',
                  'font-size': 'x-small',
                }}
              >
                <strong onclick="document.location='album.html'"
                  >Burning Jazz-rock...</strong
                >
                <p style={{'font-size': 'xx-small', 'color': 'rgb(156, 157, 158)',}}>
                  You'll find fiery, modern, groovy, jazz-...
                </p>
              </div>
            </div>
          </div>
          <div class="col" style="padding-left: 0px; padding-right: 0px">
            <div
              class="card"
              style={{
                'width': '8rem',
                'height': '200px',
                'background-color': 'rgb(41, 40, 40)',
              }}
              onclick="document.location='album.html'"
            >
              <img
                src="/Home-page/recently played/2.png"
                class="card-img-top"
                style={{'position': 'absolute', 'width': '110px', 'top': '9px', 'left': '8px'}}
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  'position': 'absolute',
                  'top': '120px',
                  'left': '-10px',
                  'font-size': 'x-small',
                }}
              >
                <strong>Metal Ballads</strong>
                <p style={{'font-size': 'xx-small', 'color': 'rgb(156, 157, 158)'}}>
                  A collection of the best metal ballads
                </p>
              </div>
            </div>
          </div>
          <div class="col" style={{'padding-left': '0px', 'padding-right': '0px'}}>
            <div
              class="card"
              style={{
                'width': '8rem',
                'height': '200px',
                'background-color': 'rgb(41, 40, 40)',
              }}
              onclick="document.location='album.html'"
            >
              <img
                src="/Home-page/recently played/3.png"
                class="card-img-top"
                style={{'position': 'absolute', 'width': '110px', 'top': '9px', 'left': '8px'}}
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  'position': 'absolute',
                  'top': '120px',
                  'left': '-10px',
                  'font-size': 'x-small',
                }}
              >
                <strong>Midian</strong>
                <p style={{'font-size': 'xx-small', 'color': 'rgb(156, 157, 158)'}}>
                  Candle of Filth
                </p>
              </div>
            </div>
          </div>
          <div class="col" style={{'padding-left': '0px', 'padding-right': '0px'}}>
            <div
              class="card"
              style={{
                'width': '8rem',
                'height': '200px',
                'background-color': 'rgb(41, 40, 40)',
              }}
              onclick="document.location='album.html'"
            >
              <img
                src="/Home-page/recently played/4.png"
                class="card-img-top"
                style={{'position': 'absolute', 'width': '110px', 'top': '9px', 'left': '8px'}}
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  'position': 'absolute',
                  'top': '120px',
                  'left': '-10px',
                  'font-size': 'x-small',
                }}
              >
                <strong>Liked Songs</strong>
              </div>
            </div>
          </div>
          <div class="col" style={{'padding-left': '0px', 'padding-right': '0px'}}>
            <div
              class="card"
              style={{
                'width': '8rem',
                'height': '200px',
                'background-color': 'rgb(41, 40, 40)',
              }}
              onclick="document.location='artist.html'"
            >
              <img
                src="/assets/drake.jpg"
                class="card-img-top"
                style={{
                  'position': 'absolute',
                  'width': '100px',
                  'height': '120px',
                  'top': '9px',
                  'left': '10px',
                  'border-radius': '50%',
                }}
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  'position': 'absolute',
                  'top': '120px',
                  'left': '-10px',
                  'font-size': 'x-small',
                }}
              >
                <strong>DRAKE</strong>
                <p style={{'font-size': 'xx-small', 'color': 'rgb(156, 157, 158)'}}>
                  Artist
                </p>
              </div>
            </div>
          </div>
          <div class="col" style={{'padding-left': '0px', 'padding-right': '0px'}}>
            <div
              class="card"
              style={{
                'width': '8rem',
                'height': '200px',
                'background-color': 'rgb(41, 40, 40)'
              }}
              onclick="document.location='album.html'"
            >
              <img
                src="/Home-page/recently played/6.png"
                class="card-img-top"
                style={{'position': 'absolute', 'width': '110px', 'top': '9px', 'left': '8px'}}
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  'position': 'absolute',
                  'top': '120px',
                  'left': '-10px',
                  'font-size': 'x-small',
                }}
              >
                <strong>POST HUMAN:S...</strong>
                <p style={{'font-size': 'xx-small', 'color': 'rgb(156, 157, 158)'}}>
                  Bring Me The Horizon
                </p>
              </div>
            </div>
          </div>
          <div class="col" style={{'padding-left': '0px', 'padding-right': '0px'}}>
            <div
              class="card"
              style={{
                'width': '8rem',
                'height': '200px',
                'background-color': 'rgb(41, 40, 40)',
              }}
              onclick="document.location='album.html'"
            >
              <img
                src="/Home-page/recently played/7.png"
                class="card-img-top"
                style={{'position': 'absolute', 'width': '110px', 'top': '9px', 'left': '8px'}}
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  'position': 'absolute',
                  'top': '120px',
                  'left': '-10px',
                  'font-size': 'x-small',
                }}
              >
                <strong>This is Joe Bonam...</strong>
                <p style={{'font-size': 'xx-small', 'color': 'rgb(156, 157, 158)'}}>
                  This is Joe Bonamassa. The essential tracks, ...
                </p>
              </div>
            </div>
          </div>
          <div class="col" style={{'padding-left': '0px', 'padding-right': '0px'}}>
            <div
              class="card"
              style={{
                'width': '8rem',
                'height': '200px',
                'background-color': 'rgb(41, 40, 40)',
              }}
              onclick="document.location='album.html'"
            >
              <img
                src="/Home-page/recently played/8.png"
                class="card-img-top"
                style={{'position': 'absolute', 'width': '110px', 'top': '9px', 'left': '8px'}}
                alt="..."
              />
              <div
                class="card-body"
                style={{
                  'position': 'absolute',
                  'top': '120px',
                  'left': '-10px',
                  'font-size': 'x-small',
                }}
              >
                <strong>Nymphetamine</strong>
                <p style={{'font-size': 'xx-small', 'color': 'rgb(156, 157, 158)'}}>
                  Crade Of Filth
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
</div>
)

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThkMzg2YTVmMzRhZDAwMTUzOWYxOWEiLCJpYXQiOjE2MzcwOTk1MjAsImV4cCI6MTYzODMwOTEyMH0.HpX1SiL-O7Tt6CkHENFSGQbtHVRMPKWwiWnEIoMYTSI"

export default HomePage