import { TestBed, inject } from '@angular/core/testing';
import { VolunteersService } from '@core/services/volunteers.service';
import { Wish, WishStatus } from '@core/models';
import { Observable, of } from 'rxjs';

const mockAllWishes = [
  {
    status: WishStatus.Discussion,
    createdDate: '2087-07-23T01:29:13.525Z',
    volunteerProfile: {
      firstname: 'Savannah',
      lastname: 'Stanton',
      company: {
        name: 'Wenabi',
      },
    },
    coordinatorProfile: {
      firstname: 'Jaida',
      lastname: 'Corkery',
    },
    initiative: {
      title: 'voluptatem voluptatum earum',
      streetName: 'Oberbrunner Brook',
      city: 'Nicolemouth',
      postalCode: '91221',
      country: 'GB',
    },
    entries: [],
    id: '2',
  },
];
class VolunteersServiceMock {
  getAllWishes(): Observable<Wish[]> {
    return of(mockAllWishes);
  }

  getWishWithStatus(statusWish: string): Observable<Wish[]> {
    return of([
      {
        status: WishStatus.WaitingAssociationValidation,
        createdDate: '2031-06-05T00:17:47.022Z',
        volunteerProfile: {
          firstname: 'Ida',
          lastname: 'Zboncak',
          company: {
            name: 'Wenabi',
          },
        },
        coordinatorProfile: {
          firstname: 'Pearlie',
          lastname: 'Boyer',
        },
        initiative: {
          title: 'quibusdam deleniti sed',
          streetName: 'Daugherty Islands',
          city: 'Thompsonstad',
          postalCode: '13843-6878',
          country: 'FM',
        },
        entries: [
          {
            dateBegin: '2021-08-21T08:00:00.000Z',
            dateEnd: '2021-08-21T12:00:00.000Z',
          },
          {
            dateBegin: '2021-08-21T08:00:00.000Z',
            dateEnd: '2021-08-21T12:00:00.000Z',
          },
        ],
        id: '3',
      },
    ]);
  }
}

describe('VolunteersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: VolunteersService,
          useClass: VolunteersServiceMock,
        },
      ],
    });
  });

  it('should be get all wish from the service', inject(
    [VolunteersService],
    (service: VolunteersService) => {
      const response: Wish[] = [...mockAllWishes];
      spyOn(service, 'getAllWishes').and.returnValue(of(response));
      service.getAllWishes();
      expect(response).toEqual(mockAllWishes);
    }
  ));

  it('should be get all wish with status parameter', inject(
    [VolunteersService],
    (service: VolunteersService) => {
      spyOn(service, 'getWishWithStatus').and.callThrough();
      service.getWishWithStatus(WishStatus.WaitingAssociationValidation);
      expect(service.getWishWithStatus).toHaveBeenCalledWith(
        WishStatus.WaitingAssociationValidation
      );
    }
  ));

  it('should create the Preferences Service', inject(
    [VolunteersService],
    (service: VolunteersService) => {
      expect(service).toBeTruthy();
    }
  ));
});
