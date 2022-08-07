import { inject, TestBed } from '@angular/core/testing';

import { VolunteersService } from './volunteers.service';
import { VolunteersWishFacadeService } from './volunteers-wish-facade.service';
import { of } from 'rxjs';
import { WishStatus } from '@core/models';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

describe('VolunteersFacadeService', () => {
  const mockWishReturnValue = [
    {
      status: WishStatus.Application,
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
  ];

  const mockCountReturnValue = [
    {
      status: WishStatus.Application,
      count: 4,
      className: 'application',
    },
    {
      status: WishStatus.Discussion,
      count: 2,
      className: 'discussion',
    },
    {
      status: WishStatus.WaitingAssociationValidation,
      count: 8,
      className: 'waiting-association',
    },
    {
      status: WishStatus.WaitingManagerValidation,
      count: 6,
      className: 'waiting-manager',
    },
    {
      status: WishStatus.InProgress,
      count: 5,
      className: 'in-progress',
    },
  ];

  class VolunteersServiceMock {
    getAllWishes = () => of(mockWishReturnValue);
    getWishWithStatus = () => of(mockWishReturnValue);
    getWishByCount = () => of(mockCountReturnValue);
  }
  const vsSpy = jasmine.createSpyObj('VolunteersService', ['getAllWishes']);
  vsSpy.getAllWishes.and.returnValue(of(mockWishReturnValue));

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule, CommonModule],
      providers: [
        VolunteersWishFacadeService,
        { provide: VolunteersService, useClass: VolunteersServiceMock },
      ],
    })
  );

  it('should be created', () => {
    const service: VolunteersWishFacadeService = TestBed.get(
      VolunteersWishFacadeService
    );
    expect(service).toBeTruthy();
  });

  it('should be have no criteria', inject(
    [VolunteersWishFacadeService, VolunteersService],
    (service: VolunteersWishFacadeService) => {
      service.criteria$.subscribe(criteria => {
        expect(criteria).toEqual('');
      });
    }
  ));

  it('should be have wishes data', inject(
    [VolunteersWishFacadeService, VolunteersService],
    (service: VolunteersWishFacadeService) => {
      service.wishes$.subscribe(wishes => {
        expect(wishes).toEqual(mockWishReturnValue);
      });
    }
  ));

  it('should be have count', inject(
    [VolunteersWishFacadeService, VolunteersService],
    (service: VolunteersWishFacadeService) => {
      service.count$.subscribe(count => {
        expect(count).toEqual(mockCountReturnValue);
      });
    }
  ));
});
