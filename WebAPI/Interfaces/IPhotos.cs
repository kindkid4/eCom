using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Interfaces
{
    public interface IPhotos
    {
        Task <IEnumerable<Photo>> GetPhotos(int id);
    }
}