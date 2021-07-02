using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using WebAPI.Dtos;
using WebAPI.Errors;
using WebAPI.Extensions;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IUnitOfWork uow;
        private readonly IConfiguration configuration;

        public AccountController(IUnitOfWork uow, IConfiguration configuration)
        {
            this.uow = uow;
            this.configuration = configuration;
        }
        //API/ACCOUNT/LOGIN
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginReqDto loginReq)
        {
            var user = await uow.UserRepository.Authenticate(loginReq.UserName, loginReq.Password);

            ApiError apiError = new ApiError();

            if (user == null)
            {
                apiError.ErrorCode = Unauthorized().StatusCode;
                apiError.ErrorMessage = "Nume sau parola gresita!";
                apiError.ErrorDetails = "Aceasta erroare apare cand userul si parola nu exista.";
                return Unauthorized(apiError);
            }
            var loginRes = new LoginResponseDto();
            loginRes.UserName = user.Username;
            loginRes.Token = CreateJWT(user);
            loginRes.Mobile = user.Mobile;
            loginRes.Email = user.Email;
            loginRes.Tara = user.Tara;
            loginRes.Judet = user.Judet;
            loginRes.Oras = user.Oras;
            loginRes.Strada = user.Strada;
            loginRes.Numar = user.Numar;
            loginRes.Pfp = user.Pfp;
            return Ok(loginRes);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterReqDto registerReq)
        {
            
            ApiError apiError = new ApiError();
            if (registerReq.UserName.IsEmpty() || registerReq.UserName.IsEmpty())
            {
                apiError.ErrorCode = BadRequest().StatusCode;
                apiError.ErrorMessage = "Numele sau parola nu pot fi lasate locuri libere";
                return BadRequest(apiError);
            }
            if (await uow.UserRepository.UserAlreadyExist(registerReq.UserName))
            {
                apiError.ErrorCode = BadRequest().StatusCode;
                apiError.ErrorMessage = "Utilizatorul exista deja,folositi alt nume";
                return BadRequest(apiError);
            }


            uow.UserRepository.Register(registerReq.UserName, registerReq.Password,registerReq.Email,registerReq.Mobile);
            await uow.SaveAsync();
            return StatusCode(201);
        }
        private string CreateJWT(User user)
        {
            var secretKey = configuration.GetSection("AppSettings:Key").Value;
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
            var claims = new Claim[]{
                new Claim(ClaimTypes.Name,user.Username),
                new Claim(ClaimTypes.NameIdentifier,user.Id.ToString())
            };
            var signingCredentials = new SigningCredentials(
                key, SecurityAlgorithms.HmacSha256Signature
            );

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(10),
                SigningCredentials = signingCredentials
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}