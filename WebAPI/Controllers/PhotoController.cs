using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class PhotoController :BaseController
    {
        private readonly IUnitOfWork uow;

        public PhotoController(IUnitOfWork uow){
            this.uow = uow;
        }
        [HttpGet("type/{id}")]
        [AllowAnonymous]
        public async Task<IActionResult> GetPhotos(int id){
            var photos = await uow.PhotoRepository.GetPhotosAsync(id);
            return Ok(photos);
        }
    }
}