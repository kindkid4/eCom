using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class PhotoRepository : IPhotoRepository
    {
        private readonly DataContext dc;

        public PhotoRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public async Task<ICollection<Photo>> GetPhotosAsync(int id)
        {
            var photos = await dc.Photos.Where(p => p.ProductId == id).ToListAsync();
            return photos;
        }
    }
}