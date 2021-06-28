using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Dtos;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class AccountController : BaseController
    {
        private readonly IUnitOfWork uow;

        public AccountController(IUnitOfWork uow){
            this.uow = uow;
        }
        //API/ACCOUNT/LOGIN
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginReqDto loginReq)
        {
            var user = await uow.UserRepository.Authenticate(loginReq.UserName,loginReq.Password);

            if(user == null)
            {
                return Unauthorized();
            }
            var loginRes = new LoginResponseDto();
            loginRes.UserName = user.Username;
            loginRes.Token = "to be generated";
            return Ok(loginRes);
        }
    }
}